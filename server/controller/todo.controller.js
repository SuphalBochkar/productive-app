const express = require("express");
const router = express.Router();
const todoDB = require("../models/todoModel");
const { todoAddMiddleware } = require("../middleware/todoAdd");
const { addTaskTypeMiddleware } = require("../middleware/taskTypeAdd");

// /api/v1/
router.get("/", async (req, res) => {
  try {
    const todos = await todoDB.find({});

    if (todos.length === 0) {
      return res.status(404).json({ message: "No todos available" });
    }

    res.json({ todos: todos });
  } catch (error) {
    console.log("Error fetching todos: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post(
  "/add",
  todoAddMiddleware,
  addTaskTypeMiddleware,
  async (req, res) => {
    try {
      const { title, taskTypeId } = req.body;
      const user = req.user;
      const defaultStatus = "pending";

      const newTodo = new todoDB({
        title,
        // Completed
        // Due date
        status: defaultStatus,
        taskType: taskTypeId,
        createdBy: user,
      });

      await newTodo.save();
      res
        .status(201)
        .json({ message: "Todo added successfully", todo: newTodo });

      user.todoList.push(newTodo._id);
      await user.save();
    } catch (error) {
      console.error("Error adding todo:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.post("/update", (req, res) => {});
router.post("/delete", (req, res) => {});

module.exports = router;
