import axios from 'axios';
import PropTypes from 'prop-types'; // ES6
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import { useHistory } from 'react-router';
import {
	Button,
	Form,
	Input,
	Label,
	Text,
	Wrapper,
} from './LoginForm.elements';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';

const LoginForm = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [loading, setLoading] = useState(false);

	//state
	const { state, dispatch } = useContext(Context);
	const { user } = state;

	console.log('STATE', state);

	//router
	const router = useHistory();

	useEffect(() => {
		if (user !== null) {
			router.push('/');
		}
	}, [user]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.table([name, email, password]);
		try {
			setLoading(true);
			const { data } = await axios.post(
				`${process.env.REACT_APP_LOCALHOST_PUBLIC_API}/login`,
				{
					email,
					password,
				}
			);
			console.log(`LOGIN RESPONSE`, data);
			dispatch({
				type: 'LOGIN',
				payload: data,
			});
			//save in local storage
			window.localStorage.setItem('user', JSON.stringify(data));
			// toast(`LOGIN SUCCESSFUL.`);
			toast.success(`LOGIN SUCCESSFUL.`);
			setLoading(false);
			//redirect
			router.push('/');
		} catch (error) {
			// toast(error.response.data);
			toast.error(error.response.data);
			setLoading(false);
		}
	};

	return (
		<>
			<Wrapper>
				<Form autoComplete="off" onSubmit={handleSubmit}>
					<Label for="email">Ingrese su Email</Label>
					<Input
						type="email"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						placeholder="Enter Email"
						required
					/>
					<Label for="password">Ingrese su contraseña</Label>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Enter Password"
						required
					/>
					<Button
					// disabled={
					// !email || !password || loading
					// }
					>
						{loading ? <LoadingSpinner /> : 'Ingresa'}
					</Button>
					<Text>
						Eres nuevo? <Link to="/register">Registrate!</Link>
					</Text>
				</Form>
			</Wrapper>
		</>
	);
};

LoginForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired,
};

export default LoginForm;
