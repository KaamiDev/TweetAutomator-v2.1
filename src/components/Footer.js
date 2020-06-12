import React, { useEffect } from 'react';

const Footer = () => {
	useEffect(() => {
		let d = new Date();
		document.getElementById('footer-year').innerHTML = d.getFullYear();
	}, []);

	return (
		<div id="footer">
			<p id="footer-text">
				&copy; <span id="footer-year">2020</span> TweetAutomator by{' '}
				<a className="footer-link" href="https://kaamidev.com" target="_blank">
					Kaami
				</a>
			</p>
		</div>
	);
};

export default Footer;
