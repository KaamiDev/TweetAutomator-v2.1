import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	let history = useHistory();

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errMessage, setErrMessage ] = useState('');
	const [ checkingLoggedIn, setCheckingLoggedIn ] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('authtoken')) {
			history.push('/');
		} else {
			setCheckingLoggedIn(false);
		}
		// eslint-disable-next-line
	}, []);

	const handleChange = (e) => {
		setErrMessage('');
		switch (e.target.id) {
			case 'username':
				setUsername(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrMessage('');
		const login = async () => {
			try {
				let response = await axios.post('http://localhost:5000/login', { username, password });
				if (response.status === 200) {
					localStorage.setItem('authtoken', response.data);
					history.push('/');
				}
			} catch (err) {
				if (err.response.status === 400) {
					setErrMessage(err.response.data);
				}
			}
		};
		login();
	};

	return (
		<div style={{ display: checkingLoggedIn ? 'none' : '' }} className="content-section">
			<div className="login-card">
				<h4 className="card-title">Authenticate Below.</h4>
				<p style={{ fontSize: '12px', color: 'red' }}>{errMessage}</p>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Username"
						onChange={handleChange}
						autoComplete="off"
						value={username}
						id="username"
					/>
					<input
						type="password"
						placeholder="Password"
						onChange={handleChange}
						value={password}
						id="password"
					/>
					<button type="submit" className="login-btn">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
