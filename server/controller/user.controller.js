const express = require("express");
// const router = express.Router();

const { generateTokenCookie } = require("../utils/generateTokenCookie");
const userDB = require("../models/userModel");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const profilePic = `https://api.dicebear.com/8.x/lorelei/svg?seed=${req.body.username}`;
    const newUser = await userDB.create({
      username: username,
      email: email,
      password: password,
      profilePic: profilePic,
    });

    if (newUser) {
      generateTokenCookie(newUser._id, res);
      await newUser.save();

      res.json({
        msg: "Signed in Successfully",
        token: req.token,
      });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error at SIGNUP: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const signin = async (req, res) => {
  try {
    const user = await userDB.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(411).json({
        // message: "User does not exist",
        message: "User not found",
      });
    }

    if (user.password !== req.body.password) {
      return res.status(411).json({
        message: "Wrong password",
      });
    }

    const jwt = generateTokenCookie(user, res);

    return res.json({
      msg: "Signed in Successfully",
      jwt: jwt,
    });
  } catch (error) {
    console.log("Error at SIGNIN: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const signout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ msg: "Logged out successfully" });
  } catch (error) {
    console.log("Error at LOGOUT: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// module.exports = router;
module.exports = { signup, signin, signout };
