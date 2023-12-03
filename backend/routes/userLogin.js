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
      user = new USER({
        userID,
        loginCount: [1],
        date: [new Date().toLocaleDateString()],
      });
      console.log(user);
      await user.save();
      res.json(user);
    } else {
      console.log("Found");
      const currentDate = new Date().toLocaleDateString();
      const lastLoginDate = user.date[user.date.length - 1];
      
      if (currentDate === lastLoginDate) {
        user.loginCount[user.loginCount.length - 1] += 1;
      } else {
        if (user.date.length > 7) {
          user.loginCount = [user.loginCount[user.loginCount.length - 1]];
          user.date = [currentDate];
        } else {
          user.loginCount.push(1);
          user.date.push(currentDate);
        }
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
