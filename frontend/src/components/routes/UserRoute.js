import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const UserRoute = ({ children }) => {
	//state
	const [ok, setOk] = useState(false);

	const router = useHistory();

	const fetchUser = async () => {
		try {
			const { data } = axios.get('/api/current-user');
			console.log(data);
			if (data.ok) setOk(true);
		} catch (error) {
			console.log(error);
			setOk(false);
			// router.push('/login');
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<>
			{!ok ? (
				<>{children}</>
			) : (
				{
					/* <LoadingSpinner
					className={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '5',
					}}
				/> */
				}
			)}
		</>
	);
};

export default UserRoute;
