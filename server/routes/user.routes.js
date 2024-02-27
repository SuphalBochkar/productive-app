//User Router - /api/v1/user

const express = require("express");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", signin);
router.post("/logout", logout);

module.exports = router;
