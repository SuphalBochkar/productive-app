// import React from "react";
// import Rightmain from "../components/myspace/Rightmain";
// import Sidebar from "../components/myspace/Sidebar";
// import TaskDetails from "../components/myspace/TaskDetails";

// const Myspace = () => {
//   return (
//     <div className="h-full flex">
//       <div className="font-AlbertSans w-[15vw] left-0 top-0 fixed h-full bg-[#f3f4f6]">
//         <Sidebar />
//       </div>
//       <div className="w-[60vw] ml-[15vw] h-full">
//         <Rightmain />
//       </div>
//       <div>
//         <div className="w-[25vw] border border-l-2 h-screen fixed">
//           <TaskDetails
//             label={"Documneting on github"}
//             des={
//               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis pariatur quidem earum nobis adipisci magni et facilis laudantium, aliquid fuga?"
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Myspace;

import React, { useState } from "react";
import Rightmain from "../components/myspace/Rightmain";
import Sidebar from "../components/myspace/Sidebar";
import TaskDetails from "../components/myspace/TaskDetails";

const Myspace = () => {
  const [isOpen, setIsOpen] = useState(true);
  const TaskDetailstoggle = () => setIsOpen(!isOpen);

  const [taskDetails, setTaskDetails] = useState({
    label: "Documneting on github",
    des: "All info",
  });

  return (
    <>
      <div className="font-AlbertSans w-[20rem] left-0 top-0 fixed h-full bg-[#f3f4f6]">
        <Sidebar />
      </div>
      <div
        className="top-0 left-[20rem] h-full relative w-auto flex"
        style={{ width: `calc(100% - 20rem)` }}
      >
        <Rightmain toggle={TaskDetailstoggle} />
        {isOpen && <TaskDetails details={taskDetails} />}
      </div>
    </>
  );
};

// const Myspace = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const TaskDetailstoggle = () => setIsOpen(!isOpen);
//   return (
//     <div className="h-full flex">
//       <div className="font-AlbertSans w-[15vw] left-0 top-0 fixed h-full bg-[#f3f4f6]">
//         <Sidebar />
//       </div>
//       <div className="w-[85vw] top-0 ml-[15vw] h-full relative">
//         <Rightmain />
//         {/* <TaskDetails /> */}
//       </div>
//     </div>
//   );
// };
export default Myspace;
