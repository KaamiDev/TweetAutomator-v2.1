import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AdminAddAccess = (props) => {
	let history = useHistory();

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ errMessage, setErrMessage ] = useState('');
	const [ successMessage, setSuccessMessage ] = useState('');

	const handleChange = (e) => {
		setErrMessage('');
		setSuccessMessage('');
		switch (e.target.id) {
			case 'username':
				setUsername(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
			case 'confirm-password':
				setConfirmPassword(e.target.value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrMessage('');
		setSuccessMessage('');
		const addUser = async () => {
			try {
				let response = await axios.post(
					'http://localhost:5000/admin/add-user',
					{
						username,
						password,
						confirmPassword
					},
					{
						headers: {
							authtoken: localStorage.getItem('authtoken')
						}
					}
				);
				if (response.status === 200) {
					setSuccessMessage(response.data.message);
					props.setUsers(response.data.newUsers);
					setUsername('');
					setPassword('');
					setConfirmPassword('');
				}
			} catch (err) {
				if (err.response.status === 401) {
					history.push('/');
				} else if (err.response.status === 400) {
					setErrMessage(err.response.data);
				}
			}
		};
		addUser();
	};

	return (
		<div className="options-card">
			<h4 className="card-title">Add Access Login</h4>
			<p style={{ fontSize: '12px', color: 'red' }}>{errMessage}</p>
			<p style={{ fontSize: '12px', color: 'green' }}>{successMessage}</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={username}
					onChange={handleChange}
					placeholder="Username"
					autoComplete="off"
					id="username"
				/>
				<input
					type="password"
					value={password}
					onChange={handleChange}
					placeholder="Password"
					autoComplete="off"
					id="password"
				/>
				<input
					type="password"
					value={confirmPassword}
					onChange={handleChange}
					placeholder="Confirm Password"
					autoComplete="off"
					id="confirm-password"
				/>
				<button type="submit" className="login-btn">
					Add Access
				</button>
			</form>
		</div>
	);
};

export default AdminAddAccess;
