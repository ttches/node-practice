const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv
const command = argv._[0];
if (command === 'list') {
  note.getAll();
} else if (command === 'add') {
 notes.addNote(argv.title, argv.body);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else if (command === 'read') {
  notes.readNote(command);
} else {
  console.log('Unknown command');
}
