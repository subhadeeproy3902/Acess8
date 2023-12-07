const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// @route  GET /api/createnotes
// @desc  Get all notes

//Create a note
router.post("/createNote", async (req, res) => {
  try {
    const { userUid, title, description, backGroundColor, date } = req.body;
    const note = new Note({
      userUid,
      title,
      description,
      backGroundColor,
      date,
    });
    const newNote = await note.save();
    res.json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

//Update a note
router.put("/updateNote/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, description, backGroundColor, date } = req.body;
    const note = await Note.findByIdAndUpdate(
      noteId,
      { title, description, backGroundColor, date },
      { new: true }
    );

    if (!note) {
      return res.status(404).send();
    }

    res.send(note);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Delete a note
router.delete("/deleteNote/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findByIdAndDelete(noteId);

    if (!note) {
      return res.status(404).send();
    }

    res.send(note);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/getNotes/:id", async (req, res) => {
  try{
    const notes = await Note.findById(req.params.id);
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

module.exports = router;
