import React from 'react';
import AdminAccessCard from './AdminAccessCard';
import AdminAddAccess from './AdminAddAccess';

const Admin = () => {
	return (
		<div className="content-section">
			<AdminAccessCard />
			<div className="profile-option-row">
				<AdminAddAccess />
			</div>
		</div>
	);
};

export default Admin;
