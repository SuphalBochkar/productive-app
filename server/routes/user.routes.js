//User Router - /api/v1/user

const express = require("express");
const {
  signup,
  signin,
  signout,
  getUsers,
  detailsOfUser,
} = require("../controller/user.controller");
const { signUpMiddleware } = require("../middleware/signup");
const { signInMiddleware } = require("../middleware/signin");
const authMiddleware = require("../middleware/authControl");
const router = express.Router();

router.post("/signup", signUpMiddleware, signup);
router.post("/signin", signInMiddleware, signin);
router.post("/signout", signout);
router.get("/all", authMiddleware, getUsers);
router.get("/me", authMiddleware, detailsOfUser);
router.get("/test", (req, res) => {
  res.send("User routes test");
});

module.exports = router;
