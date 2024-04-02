const router = require("express").Router();
const {
  sendMessage,
  getMessages,
} = require("../controller/messages.controller");

router.get("/:id", getMessages);
router.post("/send/:id", sendMessage);

module.exports = router;
