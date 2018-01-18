require('./config/config');

const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text,
	});

	todo.save().then(
		doc => {
			res.send(doc);
		},
		e => {
			res.status(400).send(e);
		},
	);
});

//GET
app.get('/todos', (req, res) => {
	Todo.find().then(
		todos => {
			res.send({
				todos,
			});
		},
		e => {
			res.status(400).send(e);
		},
	);
});

// ======= GET /todos/id =======
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	//valid id using isValid
	// 404 - send back empty send
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id)
		.then(todo => {
			if (!todo) {
				return res.status(404).send();
			}

			res.send({ todo });
		})
		.catch(e => {
			res.status(400).send();
		});
	// stop function with 404 if its not valid, not found, send back empty value

	// findById
	//success case
	//if todo = send it back
	// if no todo - send back 404 with empty body
	// errors
	// 400 - and send empty body back

	//if there is todo, then send it back
});

// =====  DELETE =====
app.delete('/todos/:id', (req, res) => {
	// get the ID
	var deleteID = req.params.id;

	if (!ObjectID.isValid(deleteID)) {
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(deleteID)
		.then(todo => {
			if (!todo) {
				return res.status(404).send();
			}

			res.send({ todo });
		})
		.catch(e => {
			res.status(400).send();
		});
});

app.patch(`/todos/:id`, (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	if (_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
		.then(todo => {
			if (!todo) {
				return res.status(404).send();
			}

			res.send({ todo });
		})
		.catch(e => {
			res.status(400).send();
		});
});

// POST /users
app.post('/users', (req, res) => {
	var body = _.pick(req.body, ['email', 'password']);
	var user = new User(body);

	user
		.save()
		.then(() => {
			return user.generateAuthToken();
			// res.send(user);
		})
		.then(token => {
			res.header('x-auth', token).send(user);
		})
		.catch(e => {
			res.status(400).send(e);
		});
});

app.get('/users/me', (req, res) => {
	var token = req.header('x-auth');

	User.findByToken(token);
});

app.listen(port, () => {
	console.log(`Started on port ${port}`);
});

module.exports = { app };
