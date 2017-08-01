const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };

  try {
    const notesString = fs.readFileSync('notes-data.json');
  } catch(e) {

  }

  let duplicateNotes = 

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const getAll = () => {
  console.log('Getting all notes');
};

const getNote = (title) => {
  console.log('Reading note');
};

const removeNote = (title) => {
  console.log('Removing note');
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
