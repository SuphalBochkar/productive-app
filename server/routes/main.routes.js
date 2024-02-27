// Main Router - /api/v1

const express = require("express");
const router = express.Router();
const userRouter = require("../controller/user.controller");
const todoRouter = require("../controller/todo.controller")
const authMiddleware = require("../middleware/authControl");

router.use("/user", userRouter);
router.use("/todo", authMiddleware, todoRouter);

module.exports = router;
