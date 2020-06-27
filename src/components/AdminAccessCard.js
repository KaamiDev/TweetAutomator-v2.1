import React from 'react';

const AdminAccessCard = () => {
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
					<tbody>
						<tr>
							<td>KaamiDev</td>
							<td className="status-active">********</td>
							<td>
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>KaamiDev</td>
							<td className="status-active">********</td>
							<td>
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>KaamiDev</td>
							<td className="status-active">********</td>
							<td>
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>KaamiDev</td>
							<td className="status-active">********</td>
							<td>
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>KaamiDev</td>
							<td className="status-active">********</td>
							<td>
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminAccessCard;
