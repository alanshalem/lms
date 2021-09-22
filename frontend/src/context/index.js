import { useReducer, createContext } from 'react';

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
	const [state, dispatch] = useReducer(rootReducer, initialState);
	return (
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	);
};

export { Context, Provider };
