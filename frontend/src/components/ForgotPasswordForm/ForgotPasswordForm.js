import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
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
} from './ForgotPasswordForm.elements';
const ForgotPasswordForm = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const [code, setCode] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [loading, setLoading] = useState(false);

	//context
	const {
		state: { user },
	} = useContext(Context);
	//router
	const router = useHistory();
	//redirigir si el usuario esta logueado
	useEffect(() => {
		if (user !== null) router.push('/');
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const { data } = await axios.post('/api/forgot-password', {
				email,
			});
			setSuccess(true);
			toast.success(`CHECK YOUR EMAIL FOR THE SECRET CODE`);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
			toast.error(error.response.data);
		}
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();
		console.log(email, code, newPassword);
		try {
			setLoading(true);
			const { data } = await axios.post('/api/reset-password', {
				email,
				code,
				newPassword,
			});
			setEmail('');
			setCode('');
			setNewPassword('');
			setLoading(false);
			toast.success(`PASSWORD CHANGED SUCCESSFULLY`);
			router.push('/login');
		} catch (error) {
			setLoading(false);
			console.log(error);
			toast.error(error.response.data);
		}
	};

	return (
		<Wrapper>
			<Form
				autoComplete="off"
				onSubmit={success ? handleResetPassword : handleSubmit}
			>
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
				{success && (
					<>
						<Text>Enter the secret code</Text>
						<Input
							type="text"
							name="code"
							value={code}
							onChange={(e) => {
								setCode(e.target.value);
							}}
							placeholder="Enter Code"
							required
						/>
						<Input
							type="password"
							name="newPassword"
							value={newPassword}
							onChange={(e) => {
								setNewPassword(e.target.value);
							}}
							placeholder="Enter New Password"
							required
						/>
					</>
				)}
				{/*<Label for="password">Ingrese su contraseña</Label>
				 <Input
					type="password"
					name="password"
					value={newPassword}
					onChange={(e) => {
						setNewPassword(e.target.value);
					}}
					placeholder="Enter new Password"
					required
				/> */}
				<Button
					type="submit"
					disabled={loading || !email}
					// disabled={
					// !email || !password || loading
					// }
				>
					{loading ? <LoadingSpinner /> : 'Submit'}
				</Button>
				<Text>
					Eres nuevo? <Link to="/register">Registrate!</Link>
				</Text>
				<hr />
				<Text>
					<Link to="/forgot-password">Olvide mi contraseña</Link>
				</Text>
			</Form>
		</Wrapper>
	);
};

export default ForgotPasswordForm;
