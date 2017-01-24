const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MondoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany

  // deleteOne

  // findOneAndDelete

// 58852f6c8209d552ad80df9b
  db.collection('Users').deleteMany({name: 'Oliver'});
  //
  // db.collection('User').findOneAndDelete({
  //   _id new ObjectID("58852f6c8209d552ad80df9b")
  // }).then((result) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // })


  // db.close();
});
