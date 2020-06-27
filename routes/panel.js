const express = require('express');
const db = require('../database/dbconfig');
const { userAuth } = require('./userAuth');
const router = express.Router();

router.get('/', userAuth, (req, res) => {
	let accounts = db.accounts.find();
	username = req.user.username;
	res.status(200).send({ accounts, username });
});

module.exports = router;
