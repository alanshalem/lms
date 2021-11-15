import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Context } from '../context/index';

const PrivateRoute = ({ component: Component, ...rest }) => {
	//state
	const { state } = useContext(Context);
	const { user } = state;

	console.log(user);
	return (
		<Route {...rest}>
			{user ? <Component /> : <Redirect to="/login" />}
		</Route>
	);
};

export default PrivateRoute;
