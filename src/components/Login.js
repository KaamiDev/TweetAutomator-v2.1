import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
	let history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push('/');
	};

	return (
		<div className="content-section">
			<div className="login-card">
				<h4 className="card-title">Authenticate Below.</h4>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Username" autoComplete="off" id="username" />
					<input type="password" placeholder="Password" id="password" />
					<button type="submit" className="login-btn">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
