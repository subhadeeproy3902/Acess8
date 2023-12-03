const express = require("express");
const QR = require("../models/QR");
const router = express.Router();

router.get("/:useruid", async (req, res) => {
  try {
    const urls = await QR.find({ userUid: req.params.useruid });
    if (urls) {
      res.json(urls);
    } else {
      res.status(404).json("No URL Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

module.exports = router;