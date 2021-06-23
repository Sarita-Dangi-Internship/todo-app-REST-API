const express = require("express");

const { Todo } = require("../model/todo");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find();
    if (!todo) return res.status(401).send("No todo found");
    return res.status(200).send(todo);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    const todo = new Todo({
      task: req.body.task,
      createdDate: req.body.createdDate,
      completed: req.body.completed,
    });
    const result = await todo.save();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/:todo_id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.todo_id, {
      task: req.body.task,
    });
    return res.status(200).send(todo);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:todo_id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.todo_id);
    return res.status(200).send(todo);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
