import React from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordPage = () => {
	return (
		<Jumbotron title="Forgot Password">
			<ForgotPasswordForm />;
		</Jumbotron>
	);
};

export default ForgotPasswordPage;
