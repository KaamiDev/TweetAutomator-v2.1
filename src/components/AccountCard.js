import React from 'react';
import TwitterLogin from 'react-twitter-login';

const AccountCard = (props) => {
	const authHandler = (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	};

	return (
		<div className="accounts-card">
			<h4 className="card-title manage-bot-title">Manage Bot Accounts</h4>
			<ul className="bot-stat-text">
				<li>Active - 4</li>
				<li>Suspended - 2</li>
				<li>Locked - 1</li>
			</ul>
			<div className="account-buttons-container">
				<TwitterLogin
					authCallback={authHandler}
					consumerKey={props.keys.consumerKey}
					consumerSecret={props.keys.consumerSecret}
					callbackUrl={'http://127.0.0.1:3000/'}
					className={'account-btn-container'}
					children={<button className="accounts-btn">Add Account</button>}
				/>
				<button className="accounts-btn">Refresh Accounts</button>
			</div>
			<div className="search-container">
				<input placeholder="Search Accounts.." className="accounts-search" />
				<button>Search</button>
			</div>

			<div className="accounts-table-container">
				<table className="accounts-table">
					<thead>
						<tr>
							<th>Account</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>@TeresaG51553675</td>
							<td className="status-active">Active</td>
							<td>
								<a className="yellow-link" href="/">
									Refresh
								</a>{' '}
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>@AshleyP30976152</td>
							<td className="status-err">Locked</td>
							<td>
								<a className="yellow-link" href="/">
									Refresh
								</a>{' '}
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>@RachelM50953750</td>
							<td className="status-err">Suspended</td>
							<td>
								<a className="yellow-link" href="/">
									Refresh
								</a>{' '}
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>@TeresaG51553675</td>
							<td className="status-active">Active</td>
							<td>
								<a className="yellow-link" href="/">
									Refresh
								</a>{' '}
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>@TeresaG51553675</td>
							<td className="status-active">Active</td>
							<td>
								<a className="yellow-link" href="/">
									Refresh
								</a>{' '}
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>@TeresaG51553675</td>
							<td className="status-active">Active</td>
							<td>
								<a className="yellow-link" href="/">
									Refresh
								</a>{' '}
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
						<tr>
							<td>@TeresaG51553675</td>
							<td className="status-active">Active</td>
							<td>
								<a className="yellow-link" href="/">
									Refresh
								</a>{' '}
								<a className="yellow-link" href="/">
									Remove
								</a>
							</td>
						</tr>
					</tbody>
				</table>
				<a href="/" className="all-accs-link yellow-link">
					Show all accounts...
				</a>
			</div>
		</div>
	);
};

export default AccountCard;
