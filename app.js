const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('Server started and listeing on port ' + PORT);
});
