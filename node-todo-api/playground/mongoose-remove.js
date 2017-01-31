const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove
//
// Todo.findByIdAndRemove
Todo.findOneAndRemove({_id: '58902a5cbab7274f8d332024'}).then((todo) => {

});


Todo.findByIdAndRemove('58902a5cbab7274f8d332024').then((todo) => {
  console.log(todo);
});
