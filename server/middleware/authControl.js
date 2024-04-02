const jwt = require("jsonwebtoken");
const userDB = require("../models/userModel");

// Add /me endpont to change from the one or if user directly opened loginor signup redirect him to dashboard

const authMiddleware = async (req, res, next) => {
  try {
    // const token = req.cookies.jwt;
    const token = req.headers.authorization; // Get the token from request headers
    console.log("Token:", token); // Debugging statement

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized Access: No Token Provided" });
    }

    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // Split the token to remove "Bearer"
    console.log("Decoded:", decoded); // Debugging statement

    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Unauthorized Access: Invalid Token" });
    }

    const user = await userDB.findById(decoded.userId).select("-password");
    console.log("User:", user); // Debugging statement

    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized Access: No User Found" });
    }

    req.user = user;
    console.log("req.user:", req.user); // Debugging statement
    next();
  } catch (error) {
    console.error("Error in authMiddleware:", error.message);
    res.status(500).json({ message: "Internal Server Error...." });
  }
};

module.exports = authMiddleware;
