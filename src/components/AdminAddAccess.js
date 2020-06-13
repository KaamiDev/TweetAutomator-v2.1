import React from 'react';

const AdminAddAccess = () => {
	return (
		<div className="options-card">
			<h4 className="card-title">Add Access Login</h4>
			<input type="text" placeholder="Username" autoComplete="off" id="username" />
			<input type="password" placeholder="Password" autoComplete="off" id="password" />
			<input type="password" placeholder="Confirm Password" autoComplete="off" id="password" />
			<button type="submit" className="login-btn">
				Add Access
			</button>
		</div>
	);
};

export default AdminAddAccess;
