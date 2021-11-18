import React, { useContext } from 'react';
import { Context } from '../../context';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import UserRoute from '../../components/routes/UserRoute';
const UserIndex = () => {
	const {
		state: { user },
	} = useContext(Context);

	return (
		<UserRoute>
			<Jumbotron title="USER DASHBOARD" />
		</UserRoute>
	);
};

export default UserIndex;
