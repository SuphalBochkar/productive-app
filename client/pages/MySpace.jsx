import React from "react";
import Rightmain from "../components/myspace/Rightmain";
import Sidebar from "../components/myspace/Sidebar";
import TaskDetails from "../components/myspace/TaskDetails";

const Myspace = () => {
  return (
    <div className="h-full flex">
      <div className="font-AlbertSans w-[15vw] left-0 top-0 fixed h-full bg-[#f3f4f6]">
        <Sidebar />
      </div>
      <div className="w-[60vw] left-0 top-0 ml-[15vw] h-full">
        <Rightmain />
      </div>
      <div>
        <div className="w-[25vw] border border-l-2 h-screen fixed">
          <TaskDetails
            label={"Documneting on github"}
            des={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis pariatur quidem earum nobis adipisci magni et facilis laudantium, aliquid fuga?"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Myspace;
