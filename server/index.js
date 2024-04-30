const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDataBase = require("./db/database");
require("dotenv").config();

const mainRouter = require("./routes/main.routes");
const { app, server } = require("./socket/socketIo.js");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  // Check if the database is connected
  res.status(200).send("connected");
});

// Use mainRouter
app.use("/api/v1", mainRouter);

connectToDataBase();
const port = process.env.PORT || 3000;
server.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
