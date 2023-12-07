const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// @route  GET /api/notes
// @desc  Get all notes


router.get("/:useruid", async (req, res) => {
  try {
    const notes = await Note.find({ userUid: req.params.useruid });
    if (notes) {
      res.json(notes);
    } else {
      res.status(404).json("No notes Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }  
})


router.get("")


module.exports = router;
