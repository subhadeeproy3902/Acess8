const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  userUid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  backGroundColor: String,
  date: String,
});

module.exports = mongoose.model("Note", NoteSchema);