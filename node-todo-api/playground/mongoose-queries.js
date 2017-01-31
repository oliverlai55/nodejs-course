const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '588b2c6b1e7a62f1dc64a0f4';
var userID = '588845d10ed44b2639a847cb';

//Validate ID
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});


Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todos', todo);
});


Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch((e) => console.log(e));

//mongoosejs.com

//Query User Collection, from users, grab ID, load in User moongose model
User.findById(userID).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});


// query works, no user, user not found message
//user was found, print user to screen
// handle errors.
