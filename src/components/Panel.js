import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import AccountCard from './AccountCard';
import OptionsCard from './OptionsCard';

const Panel = () => {
	let history = useHistory();

	const [ username, setUsername ] = useState('');
	const [ accounts, setAccounts ] = useState([]);

	useEffect(() => {
		const apiCall = async () => {
			try {
				let response = await axios.get('http://localhost:5000/panel', {
					headers: {
						authtoken: localStorage.getItem('authtoken')
					}
				});
				if (response.status === 200) {
					setUsername(response.data.username);
					setAccounts(response.data.accounts);
				}
			} catch (err) {
				if (err.response.status === 401) {
					history.push('/login');
				}
			}
		};
		apiCall();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="content-section" style={{ display: username ? '' : 'none' }}>
			<AccountCard accounts={accounts} />
			<div className="profile-option-row">
				<ProfileCard username={username} />
				<OptionsCard accounts={accounts} />
			</div>
		</div>
	);
};

export default Panel;
