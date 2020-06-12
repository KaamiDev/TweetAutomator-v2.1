import React from 'react';

const Login = () => {
	return (
		<div className="content-section">
			<div className="login-card">
				<h4 className="card-title">Authenticate Below.</h4>
				<form>
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
