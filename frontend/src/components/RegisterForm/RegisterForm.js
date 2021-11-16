import axios from 'axios';
import PropTypes from 'prop-types'; // ES6
import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../context';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import {
	Button,
	Form,
	Input,
	Label,
	Text,
	Wrapper,
} from './RegisterForm.elements';

const RegisterForm = () => {
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const { state, dispatch } = useContext(Context);
	const { user } = state;

	const router = useHistory();
	useEffect(() => {
		if (user !== null) {
			router.push('/');
		}
	}, [user, router]);

	// console.log(
	// 	`LOCALHOST_PUBLIC_API
	// 	${process.env.REACT_APP_LOCALHOST_PUBLIC_API}`
	// );

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.table([name, email, password]);
		try {
			setLoading(true);
			const { data } = await axios.post(
				`${process.env.REACT_APP_LOCALHOST_PUBLIC_API}/register`,
				{
					name,
					lastname,
					email,
					password,
				}
			);
			console.log(`REGISTER RESPONSE`, data);
			// toast(`REGISTRATION SUCCESSFUL. PLEASE LOGIN.`);
			toast.success(`REGISTRATION SUCCESSFUL. PLEASE LOGIN.`);
			setLoading(false);
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
					<Label for="name">Ingrese su Nombre</Label>
					<Input
						type="text"
						name="name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						placeholder="Enter Name"
						required
					/>
					<Label for="name">Ingrese su Apellido</Label>
					<Input
						type="text"
						name="lastname"
						value={lastname}
						onChange={(e) => {
							setLastname(e.target.value);
						}}
						placeholder="Enter Last Name"
						required
					/>
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
					{/* <Label for="password">Repita su contraseña</Label>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Enter Password"
						required
					/> */}
					<Button
					// type="submit"
					// disabled={
					// 	!name || !lastname || !email || !password || loading
					// }
					>
						{loading ? <LoadingSpinner /> : 'Registrate'}
					</Button>
					<Text>
						Have an account? <Link to="/login">Login</Link>
					</Text>
				</Form>
			</Wrapper>
		</>
	);
};

RegisterForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	lastname: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired,
};

export default RegisterForm;
