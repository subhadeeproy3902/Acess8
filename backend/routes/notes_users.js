const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/user/:useruid", async (req, res) => {
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

// @route  GET /api/notes
// @desc  Get all notes


router.get("/:useruid", async (req, res) => {
  try {
    const PAGE_SIZE = 20;
    const page = parseInt(req.query.page || "0");
    const total = await Note.countDocuments({ userUid: req.params.useruid });
    const notes = await Note.find({ userUid: req.params.useruid }).sort({ _id: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page);

    if (notes) {
      res.json({
        totalPages: Math.ceil(total / PAGE_SIZE),
        notes
      });
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
