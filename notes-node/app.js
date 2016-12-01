console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];

console.log(`Command: `, command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    console.log("==========");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Note title taken");
  }

} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command = 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}


// console.log(_.isString(true));
// console.log(_.isString('asdf'));
// console.log('Result:', notes.add(9, -2));
// var filteredArray = _.uniq(['Oliver', 1]);
// console.log(filteredArray);

// var res = notes.addNotes();
// console.log(res);

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
