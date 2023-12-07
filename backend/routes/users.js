const express = require("express");
const Url = require("../models/Url");
const router = express.Router();


router.get("/user/:useruid", async (req, res) => {
  try {
    const notes = await Url.find({ userUid: req.params.useruid });
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



router.get("/:useruid", async (req, res) => {
  try {
    const PAGE_SIZE = 20;
    const page = parseInt(req.query.page || "0");
    const total = await Url.countDocuments({ userUid: req.params.useruid });
    const urls = await Url.find({ userUid: req.params.useruid }).sort({ _id: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page);
    if (urls) {
      res.json({
        totalPages: Math.ceil(total / PAGE_SIZE),
        urls
      });
    } else {
      res.status(404).json("No URL Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

module.exports = router;