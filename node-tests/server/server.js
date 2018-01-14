const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send({
		name: 'Todo App v1.0',
	});
});

// GET /users
// Give users a name property and age property
app.get('/users', (req, res) => {
	res.send([
		{
			name: 'Oliver Lai',
			age: 28,
		},
		{
			name: 'Thomas Chen',
			age: 29,
		},
	]);
});

app.listen(3000);
module.exports.app = app;
