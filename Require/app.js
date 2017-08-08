const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv
const command = argv._[0];
if (command === 'list') {
  note.getAll();
} else if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    console.log('Note titles must be unique');
  } else {
    notes.logNote(note);
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  console.log((noteRemoved) ? `${argv.title} removed` : 'There is no note by that name');
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('There is no note with that title');
  }
} else {
  console.log('Unknown command');
}
