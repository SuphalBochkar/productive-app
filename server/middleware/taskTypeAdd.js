const TaskType = require("../models/taskTypeModel");

async function addTaskTypeMiddleware(req, res, next) {
  try {
    const taskType = req.body.taskType || "other";

    let existingTaskType = await TaskType.findOne({ name: taskType });
    const user = req.user;

    if (!existingTaskType) {
      const newTaskType = await TaskType.create({
        createdBy: user._id,
        name: taskType,
      });
      req.body.taskTypeId = newTaskType._id;
      user.taskTypes.push(newTaskType._id);
      await user.save();
    } else {
      req.body.taskTypeId = existingTaskType._id;
    }

    next();
  } catch (error) {
    console.error("Error in addTaskTypeMiddleware:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { addTaskTypeMiddleware };
