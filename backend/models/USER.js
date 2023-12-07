// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userID: String,
  loginCount: Number,
  dateofLogin: String,
  date: String,
});

module.exports = mongoose.model("USER", userSchema);
