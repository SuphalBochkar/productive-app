const mongoose = require("mongoose");

const taskTypeSchema = mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    // default: "other",
  },
});

const TaskType = mongoose.model("taskType", taskTypeSchema);
module.exports = TaskType;
