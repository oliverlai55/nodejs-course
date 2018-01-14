var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
	// Check if email already exists
	db.saveUser({
		email,
		password,
	});
	// Save the user to the database
	// Send that welcome email
};
