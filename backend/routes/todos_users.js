const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// @route  GET /api/todos
// @desc  Get all todos

router.get("/:useruid", async (req, res) => {
  try {
    const todos = await Todo.find({ userUid: req.params.useruid });
    if (todos) {
      res.json(todos);
    } else {
      res.status(404).json("No todos Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }  
});


router.get("")
module.exports = router;
