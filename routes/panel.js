const express = require('express');
const db = require('../database/dbconfig');
const { userAuth } = require('./userAuth');
const router = express.Router();

router.get('/', userAuth, (req, res) => {
	let accounts = db.accounts.find();
	username = req.user.username;
	keys = {
		consumerKey: process.env.CONSUMER_KEY,
		consumerSecret: process.env.CONSUMER_SECRET
	};
	res.status(200).send({ accounts, username, keys });
});

router.post('/add-account', userAuth, (req, res) => {
	if (req.body.accessToken && req.body.accessSecret && req.body.username) {
		if (!db.accounts.findOne({ username: req.body.username })) {
			let account = {
				username: req.body.username,
				accessToken: req.body.accessToken,
				accessSecret: req.body.accessSecret,
				status: 'active'
			};
			db.accounts.save(account);
			let accounts = db.accounts.find();
			res.status(200).send({ message: 'Account added successfully', newAccounts: accounts });
		} else {
			res.status(400).send('Account has already been added.');
		}
	} else {
		res.status(400).send('Some fields are missing.');
	}
});

router.post('/remove-account', userAuth, (req, res) => {
	if (req.body.accountId) {
		db.accounts.remove({ _id: req.body.accountId });
		let accounts = db.accounts.find();
		res.status(200).send({ message: 'Account removed successfully', newAccounts: accounts });
	} else {
		res.status(400).send('Some fields are missing.');
	}
});

module.exports = router;
