const userDB = require("../models/userModel");
const { userZodSignup } = require("../models/zodModel");

function signUpMiddleware(req, res, next) {
  try {
    console.log(req.body);

    const response = userZodSignup.safeParse(req.body);
    if (!response.success) {
      return res.status(411).json({
        msg: "Incorrect Inputs",
      });
    }

    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(411).json({
        msg: "Password and confirm password do not match",
      });
    }

    userDB.findOne({ email: email }).then((value) => {
      if (value) {
        return res.status(411).json({
          msg: "Email Already Taken",
        });
      } else {
        next();
      }
    });
  } catch (error) {
    console.log("Error at SIGNUP Middleware: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  signUpMiddleware,
};
