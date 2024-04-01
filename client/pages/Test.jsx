import React from "react";
import DoneTodo from "../components/myspace/DoneTodo";
import TaskDetails from "../components/myspace/TaskDetails";

const Test = () => {
  return (
    <div>
      {/* <DoneTodo label={"Done with Gym"} /> */}
      <TaskDetails
        label={"Commenting on Github"}
        des={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis."
        }
      />
    </div>
  );
};

export default Test;
