const express = require("express");
const router = express.Router();
const Url = require("../models/Url");
const QR = require("../models/QR");
const USER = require("../models/USER");

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
      url.scanCount++;
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


router.get("/USER/:code", async (req, res) => {
  try {
    const userID = req.params.code;
    console.log(userID)
    const user = await USER.findOne({ userID });
    if (user) {
      user.loginCount++;
      await user.save();
    } else {
      return res.status(404).json("No 1 User Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

module.exports = router;
