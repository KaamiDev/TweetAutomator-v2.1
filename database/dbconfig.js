var db = require('diskdb');
db = db.connect('./database/DB', [ 'accounts', 'users' ]);

if (!db.users.findOne({ username: 'admin' })) {
	let user = {
		username: 'admin',
		password: 'admin'
	};
	db.users.save(user);
	console.log('Admin account created.');
}

module.exports = db;
