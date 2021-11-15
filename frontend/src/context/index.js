import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router';
//initial state
const initialState = {
	user: null,
};

//create context
const Context = createContext();

// root reducer
const rootReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, user: action.payload };
		case 'LOGOUT':
			return { ...state, user: null };
		default:
			return state;
	}
};

//context provider

const Provider = ({ children }) => {
	const router = useHistory();
	const [state, dispatch] = useReducer(rootReducer, initialState);

	useEffect(() => {
		dispatch({
			type: 'LOGIN',
			payload: JSON.parse(window.localStorage.getItem('user')),
		});
	}, []);

	axios.interceptors.response.use(
		function (response) {
			//CUALQUIER CODIGO DE STATUS QUE ESTE EN 2XX CAUSA QUE ESTA FUNCION SE DISPARE
			return response;
		},

		function (error) {
			//CUALQUIER CODIGO DE STATUS QUE ESTE FUERA DEL RANGO 2XX CAUSA QUE ESTA FUNCION SE DISPARE
			let res = error.response;
			if (
				res.status === 401 &&
				res.config &&
				!res.config.__isRetryRequest
			) {
				return new Promise((resolve, reject) => {
					axios
						.get('/api/logout')
						.then((data) => {
							// console.log(`/401 ERROR > LOGOUT`);
							// dispatch({ type: 'LOGOUT' }); DESCOMENTAR! IMPORTANTE
							// window.localStorage.removeItem('user'); DESCOMENTAR! IMPORTANTE
							router.push('/login');
						})
						.catch((error) => {
							console.log(`AXIOS INTERCEPTORS ERROR ${error}`);
							// reject(error);
						});
				});
			}
			return Promise.reject(error);
		}
	);

	//uso csrf

	useEffect(() => {
		const getCsrfToken = async () => {
			const { data } = await axios.get('/api/csrf-token');
			console.log(`CSRF ${JSON.stringify(data)}`);
			axios.defaults.headers['X-CSRF-Token'] = data.getCsrfToken;
		};
		getCsrfToken();
	}, []);

	return (
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	);
};

export { Context, Provider };
