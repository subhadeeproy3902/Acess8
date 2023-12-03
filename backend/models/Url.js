const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  userUid: String,
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  title: String,
  icon: String,
  photoUrl: String,
  date: { type: String, default: Date.now },
  clickCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Url", urlSchema);
