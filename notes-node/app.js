console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: 't'
};

const argv = yargs.argv;

var command = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: {
      describe: "Body of Note",
      demand: true,
      alias: 'b'
    }
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,

  })
  .help()
  .argv;

console.log(`Command: `, command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title taken");
  }

} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => note.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
  }
} else if (command = 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
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
