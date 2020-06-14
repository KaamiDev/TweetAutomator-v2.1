const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/panel', require('./routes/panel'));
app.use('/login', require('./routes/login'));
app.use('/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('Server started and listeing on port ' + PORT);
});
