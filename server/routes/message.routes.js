const {
  sendMessage,
  getMessages,
} = require("../controller/messages.controller");
const authMiddleware = require("../middleware/authControl");

const router = require("express").Router();

router.post("/:id", authMiddleware, getMessages);
router.post("/send/:id", authMiddleware, sendMessage);
