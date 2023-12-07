const express = require("express");
const USER = require("../models/USER");
const router = express.Router();

// @route POST /api/login/updateLoginCount

router.post("/userLogin", async (req, res) => {
  try {
    const userID = req.body.userID;
    let user = await USER.findOne({ userID });
    if (!user) {
      console.log("Not found");
      const currentDate = new Date().toLocaleDateString();
      user = new USER({
        userID,
        loginCount: 1,
        dateofLogin: currentDate,
        date: currentDate,
      });
      console.log(user);
      await user.save();
      res.json(user);
    } else {
      console.log("Found");
      const currentDate2 = new Date().toLocaleDateString();
      if (user.date !== currentDate2) {
        user.date = currentDate2;
        user.loginCount += 1;
      }
      console.log(user);
      await user.save();
      res.json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

module.exports = router;
