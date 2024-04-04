import React from "react";
import TaskDetailsInfo from "./TaskDetailsInfo";
import Attachment from "./Attachment";
import Comments from "./Comments";

const TaskDetails = ({ details }) => {
  return (
    <div className="p-4 w-[30rem] h-full relative font-AlbertSans transition">
      <h3 className="text-3xl">Task Details</h3>
      <div className="border p-4 rounded-xl m-1 mt-5">
        <h6 className="mb-3 text-gray-400 font-semibold">My Work Task</h6>
        <h3 className="mb-3">{details.label}</h3>
        <p className="mb-8">{details.des}</p>
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
