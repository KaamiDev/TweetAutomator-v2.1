const db = require('../database/dbconfig');

module.exports.adminAuth = (req, res, next) => {
	if (req.user.username === 'admin') {
		next();
	} else {
		res.status(401).send('Not Authorized.');
	}
};

module.exports.userAuth = (req, res, next) => {
	let user = db.users.findOne({ _id: req.headers.authtoken });
	if (user) {
		req.user = user;
		next();
	} else {
		res.status(401).send('Not Authorized.');
	}
};
