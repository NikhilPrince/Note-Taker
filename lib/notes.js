const fs = require('fs');
const path = require('path');

function brandNew(body, noteBody) {
  const note = body;
  noteBody.push(note);
  fs.sync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ noteBody }, null, 2)
  );
  return note;
}


function eraseNotes(id, notes) {
  let noteBody = notes.filter(el => {
    if (el.id == id) {
      return false
    } else {
      return true
    }
  })


  let index = 0;
  noteBody.forEach(note => {
    note.id = index;
    index += 1;
  });


  fs.sync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ noteBody }, null, 2)
  );
  return noteBody;
}

module.exports = {
  brandNew,
  eraseNotes
};