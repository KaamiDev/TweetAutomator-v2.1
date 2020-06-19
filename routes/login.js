const express = require('express');
const db = require('diskdb');
const router = express.Router();

router.post('/', (req, res) => {
	if (req.body.username && req.body.password) {
		let user = db.users.findOne({ username: req.body.username.toLowerCase(), password: req.body.password });
		if (user) {
			res.status(200).send(user._id);
		} else {
			res.status(200).send('Invalid Credentials.');
		}
	} else {
		res.status(200).send('Missing fields.');
	}
});

module.exports = router;
