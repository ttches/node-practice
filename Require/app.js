const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title,
    body
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note by title', {
    title
  })
  .command('remove', 'Remove a note by title', {
    title
  })
  .help()
  .argv;
const command = argv._[0];
if (command === 'list') {
  notes.getAll();
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
