var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    })
  }, (e) => {
    res.status(400).send(e);
  });
});

 
// GET /todos/id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //valid id using isValid
  // 404 - send back empty send
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
  // stop function with 404 if its not valid, not found, send back empty value

  // findById
    //success case
      //if todo = send it back
      // if no todo - send back 404 with empty body
  // errors
    // 400 - and send empty body back

  //if there is todo, then send it back
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
