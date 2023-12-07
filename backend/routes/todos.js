const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// @route  GET /api/createtodos
// @desc  Get all todos

//Create a todo
router.post("/createTodo", async (req, res) => {
  try {
    const { userUid, todoTitle, todoDescription } = req.body;
    const todo = new Todo({
      userUid,
      todoTitle,
      todoDescription,
      todoStatus: "pending",
      todoCompletionDate: "",
      todoCompletionTime: "",
    });
    const newTodo = await todo.save();
    res.json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});


//Update a todo

router.put("/updateTodo/:id", async (req, res) => {
  try{
    const todoId = req.params.id;
    const { todoTitle, todoDescription } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      todoId,
      { todoTitle, todoDescription },
      { new: true }
    );

    if (!todo) {
      return res.status(404).send();
    }

    res.send(todo);
  } catch (e) {
    console.error(error);
    res.status(500).json("Server error");
  }
});


//Delete a todo
router.delete("/deleteTodo/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findByIdAndDelete(todoId);

    if (!todo) {
      return res.status(404).send();
    }

    res.send(todo);
  } catch (e) {
    res.status(500).send();
  }
});


//Get all todos
router.get("/getTodos/:id", async (req, res) => {
  try{
    const todos = await Todo.findById(req.params.id);
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});


//Complete todo
router.put("/completeTodo/:id", async (req, res) => {
  try{
    const todoId = req.params.id;
    const { todoStatus } = req.body;
    const todoCompletionDate = new Date().toLocaleDateString();
    const todoCompletionTime = new Date().toLocaleTimeString();
    const todo = await Todo.findByIdAndUpdate(
      todoId,
      { todoStatus, todoCompletionDate, todoCompletionTime },
      { new: true }
    );

    if (!todo) {
      return res.status(404).send();
    }

    res.send(todo);
  } catch (e) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

module.exports = router;