// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userID: String,
  loginCount: Array,
  date: Array,
});

module.exports = mongoose.model("USER", userSchema);
