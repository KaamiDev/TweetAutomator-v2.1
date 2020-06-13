import React from 'react';
import ProfileCard from './ProfileCard';
import AccountCard from './AccountCard';
import OptionsCard from './OptionsCard';

const Panel = () => {
	return (
		<div className="content-section">
			<AccountCard />
			<div className="profile-option-row">
				<ProfileCard />
				<OptionsCard />
			</div>
		</div>
	);
};

export default Panel;
