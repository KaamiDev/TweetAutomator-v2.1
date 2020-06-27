import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AdminAccessCard from './AdminAccessCard';
import AdminAddAccess from './AdminAddAccess';

const Admin = () => {
	let history = useHistory();

	const [ users, setUsers ] = useState([]);

	useEffect(() => {
		const apiCall = async () => {
			try {
				let response = await axios.get('http://localhost:5000/admin', {
					headers: {
						authtoken: localStorage.getItem('authtoken')
					}
				});
				if (response.status === 200) {
					setUsers(response.data.users);
				}
			} catch (err) {
				if (err.response.satus === 401) {
					history.push('/');
				}
			}
		};
		apiCall();
	}, []);

	return (
		<div style={{ display: users.length ? '' : 'none' }} className="content-section">
			<AdminAccessCard users={users} />
			<div className="profile-option-row">
				<AdminAddAccess />
			</div>
		</div>
	);
};

export default Admin;
