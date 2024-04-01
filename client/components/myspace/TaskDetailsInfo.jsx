import React from "react";

const TaskDetailsInfo = ({ title, label }) => {
  return (
    <div className="flex">
      <div className="w-[25%]">{title}</div>
      <div className="w-[75%]">{label}</div>
    </div>
  );
};

export default TaskDetailsInfo;
