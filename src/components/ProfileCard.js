import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import ProfileIcon from '../profile-icon.svg';

const ProfileCard = () => {
	let history = useHistory();

	const handleLogout = () => {
		history.push('/login');
	};

	return (
		<div className="profile-card">
			<div className="profile-stuff-container">
				<img className="profile-image" alt="pfp" src={ProfileIcon} />
				<div className="user-text-container">
					<h4 className="card-title profile-username">KaamiDev</h4>
					<p className="profile-description">
						{/* User */}
						<Link className="yellow-link" to="/admin">
							Admin
						</Link>
					</p>
				</div>
			</div>
			<div className="profile-button-container">
				<button onClick={handleLogout} className="logout-btn">
					Logout
				</button>
			</div>
		</div>
	);
};

export default ProfileCard;
