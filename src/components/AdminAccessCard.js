import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AdminAccessCard = (props) => {
	let history = useHistory();

	const [ errMessage, setErrMessage ] = useState('');

	const handleRemove = (e) => {
		e.preventDefault();
		const removeUser = async (userid) => {
			try {
				let response = await axios.post(
					'http://localhost:5000/admin/remove-user',
					{ userid },
					{
						headers: {
							authtoken: localStorage.getItem('authtoken')
						}
					}
				);
				if (response.status === 200) {
					props.setUsers(response.data.newUsers);
				}
			} catch (err) {
				if (err.response.status === 401) {
					history.push('/');
				} else if (err.response.status === 400) {
					setErrMessage(err.response.data);
				}
			}
		};
		removeUser(e.target.id);
	};

	const usersToDisplay = props.users.map((user) => {
		return (
			<tr key={user._id}>
				<td>{user.username}</td>
				<td className="status-active">{user.password.split('').map((char) => '*').join('')}</td>
				<td>
					<a
						style={{ display: user.username === 'admin' ? 'none' : '' }}
						className="yellow-link"
						onClick={handleRemove}
						id={user._id}
						href="/admin"
					>
						Remove
					</a>
					<p style={{ margin: 0, display: user.username === 'admin' ? '' : 'none' }}>-</p>
				</td>
			</tr>
		);
	});

	return (
		<div className="accounts-card">
			<h4 className="card-title manage-bot-title">Manage Access</h4>
			<p className="profile-description manage-access-description">
				Here are all the logins that hold access to this panel.
			</p>
			<p style={{ fontSize: '12px', color: 'red' }}>{errMessage}</p>
			<div className="accounts-table-container">
				<table className="accounts-table">
					<thead>
						<tr>
							<th>Username</th>
							<th>Password</th>
							<th>Action(s)</th>
						</tr>
					</thead>
					<tbody>{usersToDisplay}</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminAccessCard;
