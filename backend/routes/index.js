const express = require("express");
const router = express.Router();
const Url = require("../models/Url");
const QR = require("../models/QR");
const Note = require("../models/Note");
const Todo = require("../models/Todo");

// @route     GET /:code
// @desc      Redirect to long/original URL

router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      url.clickCount++;
      await url.save();
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});


router.get("/QR/:code", async (req, res) => {
  try {
    const url = await QR.findOne({ urlCode: req.params.code });
    if (url) {
      await QR.updateOne({ urlCode: req.params.code }, { $inc: { scanCount: 1 } })
      await url.save();
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

router.get("/notes/:useruid", async (req, res) => {
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


router.get("/todos/:useruid", async (req, res) => {
  try {
    const todos = await Todo.find({ userUid: req.params.useruid });
    if (todos) {
      res.json(todos);
    } else {
      res.status(404).json("No todos Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }  
});


module.exports = router;
