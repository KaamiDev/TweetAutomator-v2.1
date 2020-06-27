import React from 'react';

const AdminAccessCard = (props) => {
	const usersToDisplay = props.users.map((user) => {
		return (
			<tr key={user._id}>
				<td>{user.username}</td>
				<td className="status-active">{user.password.split('').map((char) => '*').join('')}</td>
				<td>
					<a
						style={{ display: user.username === 'admin' ? 'none' : '' }}
						className="yellow-link"
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
