const express = require('express');
const db = require('../database/dbconfig');
const { userAuth, adminAuth } = require('./userAuth');
const router = express.Router();

router.get('/', userAuth, adminAuth, (req, res) => {
	let users = db.users.find();
	res.status(200).send({ users });
});

router.post('/add-user', (req, res) => {
	if (req.body.username && req.body.password && req.body.confirmpassword) {
		if (!db.accounts.findOne({ username: req.body.username.toLowerCase() })) {
			let user = {
				username: req.body.username.toLowerCase(),
				password: req.body.password
			};
			db.users.save(user);
			res.status(200).send('User added successfully.');
		} else {
			res.status(400).send('Username already exists.');
		}
	} else {
		res.status(400).send('Some fields are missing.');
	}
});

module.exports = router;
