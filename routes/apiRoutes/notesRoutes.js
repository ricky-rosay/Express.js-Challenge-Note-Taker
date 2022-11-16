const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
let { notesArray } = require('../../db/db');

// adding db instead of notes //
router.get('/db', (req, res) => {
  let results = notesArray;
  res.json(results);
});

// adding db instead of notes //
router.post('/db', (req, res) => {
  // set id based on what the next index of the array will be
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});

// adding db instead of notes //
router.delete('/db/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = router;