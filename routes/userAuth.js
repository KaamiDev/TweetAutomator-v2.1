const db = require('../database/dbconfig');

module.exports.adminAuth = (req, res, next) => {};

module.exports.userAuth = (req, res, next) => {
	let user = db.users.findOne({ _id: req.headers.authtoken });
	if (user) {
		req.user = user;
		next();
	} else {
		res.status(401).send('Not Authorized.');
	}
};
