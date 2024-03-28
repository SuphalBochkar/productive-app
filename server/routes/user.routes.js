//User Router - /api/v1/user

const express = require("express");
const { signup, signin, signout } = require("../controller/user.controller");
const { signUpMiddleware } = require("../middleware/signup");
const { signInMiddleware } = require("../middleware/signin");
const router = express.Router();

router.post("/signup", signUpMiddleware, signup);
router.post("/signin", signInMiddleware, signin);
router.post("/signout", signout);

module.exports = router;
