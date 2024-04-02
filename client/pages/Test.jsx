import React from "react";
import DoneTodo from "../components/myspace/DoneTodo";
import TaskDetails from "../components/myspace/TaskDetails";
import Todocomp from "../components/myspace/Todocomp";

const Test = () => {
  return (
    <div>
      {/* <DoneTodo label={"Done with Gym"} /> */}
      {/* <TaskDetails
        label={"Commenting on Github"}
        des={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis."
        }
      /> */}
      <Todocomp name={"Done with the gym"}/>
    </div>
  );
};

export default Test;
