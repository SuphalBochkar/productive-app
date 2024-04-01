//User Router - /api/v1/user

const express = require("express");
const {
  signup,
  signin,
  signout,
  getUsers,
} = require("../controller/user.controller");
const { signUpMiddleware } = require("../middleware/signup");
const { signInMiddleware } = require("../middleware/signin");
const authMiddleware = require("../middleware/authControl");
const router = express.Router();

router.post("/signup", signUpMiddleware, signup);
router.post("/signin", signInMiddleware, signin);
router.post("/signout", signout);
router.get("/all", authMiddleware, getUsers);

module.exports = router;
