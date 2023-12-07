const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  userUid: {
    type: String,
    required: true,
  },
  todoTitle: {
    type: String,
    required: true,
  },
  todoDescription: String,
  todoStatus: String,
  todoCompletionDate: String,
  todoCompletionTime: String,
});

module.exports = mongoose.model("Todo", TodoSchema);
