const express = require('express');
const db = require('../database/dbconfig');
const { userAuth, adminAuth } = require('./userAuth');
const router = express.Router();

router.get('/', userAuth, adminAuth, (req, res) => {
	let users = db.users.find();
	res.status(200).send({ users });
});

router.post('/add-user', userAuth, adminAuth, (req, res) => {
	if (req.body.username && req.body.password && req.body.confirmPassword) {
		if (req.body.password === req.body.confirmPassword) {
			if (!db.users.findOne({ username: req.body.username.toLowerCase() })) {
				let user = {
					username: req.body.username.toLowerCase(),
					password: req.body.password
				};
				db.users.save(user);
				res.status(200).send({ message: 'User added successfully.', newUsers: db.users.find() });
			} else {
				res.status(400).send('Username already exists.');
			}
		} else {
			res.status(400).send('Confirm password does not match.');
		}
	} else {
		res.status(400).send('Some fields are missing.');
	}
});

router.post('/remove-user', userAuth, adminAuth, (req, res) => {
	db.users.remove({ _id: req.body.userid });
	res.send({ message: 'User removed successfully', newUsers: db.users.find() });
});

module.exports = router;
