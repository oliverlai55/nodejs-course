var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.post('/todos', (req, res) => {

});

//GET

app.listen(3000, () => {
  console.log('Started on port 3000');
});
