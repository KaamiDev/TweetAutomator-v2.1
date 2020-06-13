import React, { useState } from 'react';

const OptionsCard = () => {
	const [ selectedOption, setSelectedOption ] = useState('RT');

	const handleClick = (e) => {
		setSelectedOption(e.target.innerHTML);
	};

	return (
		<div className="options-card">
			<h4 className="card-title">Manage Twitter Options</h4>
			<div className="option-btn-containers">
				<button onClick={handleClick} className={`option-btn ${selectedOption === 'RT' ? 'active' : ''}`}>
					RT
				</button>
				<button onClick={handleClick} className={`option-btn ${selectedOption === 'Like' ? 'active' : ''}`}>
					Like
				</button>
				<button onClick={handleClick} className={`option-btn ${selectedOption === 'Follow' ? 'active' : ''}`}>
					Follow
				</button>
				<button onClick={handleClick} className={`option-btn ${selectedOption === 'Report' ? 'active' : ''}`}>
					Report
				</button>
			</div>
			<input type="number" placeholder="# of Bots (max: 4)" min="1" max="4" autoComplete="off" id="username" />
			<input
				type="text"
				placeholder={selectedOption === 'Like' || selectedOption === 'RT' ? 'Tweet Link' : 'Account @'}
				autoComplete="off"
				id="password"
			/>
			<button type="submit" className="login-btn">
				{selectedOption} {selectedOption === 'RT' || selectedOption === 'Like' ? 'Tweet' : 'Account'}
			</button>
		</div>
	);
};

export default OptionsCard;
