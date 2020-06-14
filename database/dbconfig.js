var db = require('diskdb');
db = db.connect('./database/DB', [ 'accounts', 'users' ]);

module.exports = db;
