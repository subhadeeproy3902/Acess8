const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  userUid: String,
  urlCode: String,
  qrCode: String,
  longUrl: String,
  shortUrl: String,
  icon: String,
  photoUrl: String,
  title: String,
  date: { type: String, default: Date.now },
  scanCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("QR", urlSchema);
