const express = require("express");
const USER = require("../models/USER");
const router = express.Router();

router.get("/:userID", async (req, res) => {
  try {
    const users = await USER.find({ userID: req.params.userID });
    if (users) {
      res.json(users);
    } else {
      res.status(404).json("No URL Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

module.exports = router;