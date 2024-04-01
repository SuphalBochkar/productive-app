import React from "react";
import TaskDetailsInfo from "./TaskDetailsInfo";
import Attachment from "./Attachment";
import Comments from "./Comments";

const TaskDetails = ({ label, des }) => {
  return (
    <div className="p-4">
      <h3>Task Details</h3>
      <div className="border p-4 rounded-lg">
        <h6>My Work Task</h6>
        <h3>{label}</h3>
        <p>{des}</p>
        <TaskDetailsInfo title={"TimeLine"} label={"22 April 2024"} />
        <TaskDetailsInfo title={"Time"} label={"22 April 2024"} />
        <TaskDetailsInfo title={"Assigne"} label={"22 April 2024"} />
        <TaskDetailsInfo title={"Type"} label={"22 April 2024"} />
        <Attachment />
        <h3>Comments</h3>
        <Comments
          des={"Do your work and submit"}
          name={"Jorge"}
          time={"12:02"}
        />
      </div>
    </div>
  );
};

export default TaskDetails;
