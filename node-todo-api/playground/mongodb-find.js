const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MondoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	//   _id: new ObjectID('58852de8618566529a5f8fd7')
	// }).toArray().then((docs) => {
	//   console.log('Todos');
	//   console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	//   console.log('Unable to fetch todo', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	//   console.log(`Todos count: ${count}`);
	//   console.log(JSON.stringify(count, undefined, 2));
	// }, (err) => {
	//   console.log('Unable to fetch todo', err);
	// });

	db
		.collection('Users')
		.find({ name: 'Oliver' })
		.toArray()
		.then(docs => {
			console.log(JSON.stringify(docs, undefined, 2));
		});
	// db.close();
});
