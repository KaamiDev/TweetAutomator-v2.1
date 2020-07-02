import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TwitterLogin from 'react-twitter-login';

const AccountCard = (props) => {
	let history = useHistory();

	const [ errMessage, setErrMessage ] = useState('');
	const [ successMessage, setSuccessMessage ] = useState('');

	const handleRemove = (e) => {
		e.preventDefault();
		setErrMessage('');
		setSuccessMessage('');
		const removeAccount = async () => {
			try {
				let response = await axios.post(
					'http://localhost:5000/panel/remove-account',
					{
						accountId: e.target.id
					},
					{
						headers: {
							authtoken: localStorage.getItem('authtoken')
						}
					}
				);
				if (response.status === 200) {
					setSuccessMessage(response.data.message);
					props.setAccounts(response.data.newAccounts);
				}
			} catch (err) {
				if (err.response.status === 401) {
					history.push('/');
				} else if (err.response.status === 400) {
					setErrMessage(err.response.data);
				}
			}
		};
		removeAccount();
	};

	const accountsToDisplay = props.accounts.map((account) => {
		return (
			<tr key={account._id}>
				<td>@{account.username}</td>
				<td className="status-active" style={{ textTransform: 'capitalize' }}>
					{account.status}
				</td>
				<td>
					<a className="yellow-link" href="/">
						Refresh
					</a>{' '}
					<a className="yellow-link" onClick={handleRemove} id={account._id} href="/">
						Remove
					</a>
				</td>
			</tr>
		);
	});

	const authHandler = (err, data) => {
		if (err) {
			console.log(err);
		} else {
			setErrMessage('');
			setSuccessMessage('');
			const addAccount = async () => {
				try {
					let response = await axios.post(
						'http://localhost:5000/panel/add-account',
						{
							username: data.screen_name,
							accessToken: data.oauth_token,
							accessSecret: data.oauth_token_secret
						},
						{
							headers: {
								authtoken: localStorage.getItem('authtoken')
							}
						}
					);
					if (response.status === 200) {
						setSuccessMessage(response.data.message);
						props.setAccounts(response.data.newAccounts);
					}
				} catch (err) {
					if (err.response.status === 401) {
						history.push('/');
					} else if (err.response.status === 400) {
						setErrMessage(err.response.data);
					}
				}
			};
			addAccount();
			console.log(data);
		}
	};

	return (
		<div className="accounts-card">
			<h4 className="card-title manage-bot-title">Manage Bot Accounts</h4>

			<ul className="bot-stat-text">
				<li>Active - {props.accounts.length}</li>
				<li>Suspended - 0</li>
				<li>Locked - 0</li>
			</ul>
			<p style={{ fontSize: '12px', color: 'red' }}>{errMessage}</p>
			<p style={{ fontSize: '12px', color: 'green' }}>{successMessage}</p>

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
						{/* <tr>
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
						</tr> */}
						{accountsToDisplay}
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
