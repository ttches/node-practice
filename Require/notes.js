const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  let notes = fetchNotes();
  notes.forEach(logNote);
};

const getNote = (title) => {
  let notes = fetchNotes();
  let note = notes.filter((note) => note.title === title);
  return note[0] || false

};

const removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  return;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  logNote,
  removeNote
};
