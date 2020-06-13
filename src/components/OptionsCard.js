import React from 'react';

const OptionsCard = () => {
	return (
		<div className="options-card">
			<h4 className="card-title">Manage Twitter Options</h4>
			<div className="option-btn-containers">
				<button className="option-btn active">RT</button>
				<button className="option-btn">Like</button>
				<button className="option-btn">Follow</button>
				<button className="option-btn">Report</button>
			</div>
			<input type="number" placeholder="# of Bots (max: 4)" min="1" max="4" autoComplete="off" id="username" />
			<input type="text" placeholder="Tweet Link" autoComplete="off" id="password" />
			<button type="submit" className="login-btn">
				RT Tweet
			</button>
		</div>
	);
};

export default OptionsCard;
