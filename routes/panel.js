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

module.exports = router;
