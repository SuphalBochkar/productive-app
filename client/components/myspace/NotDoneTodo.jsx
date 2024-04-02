import React from "react";
import Todoinfo from "./Todoinfo";
import Tasktype from "./Tasktype";
import cal from "../../src/assets/calender.svg";
import comm from "../../src/assets/comments.svg";
import atta from "../../src/assets/attachment.svg";
import pencil from "../../src/assets/pencil.svg";
import del from "../../src/assets/delete.svg";

// const NotDoneTodo = ({ name, onToggleCompleted }) => {
//   return (
//     <div
//       className="flex hover:bg-oran-700 font-AlbertSans p-2 mx-6 my-5 border-2 border-gray-200 border-solid rounded-xl cursor-pointer"
//       onClick={onToggleCompleted}
//     >
//       <div className="m-2 pt-0.5">
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             className="form-checkbox h-5 w-5 text-blue-500"
//             onClick={onToggleCompleted}
//           />
//         </label>
//       </div>
//       <div className="mx-2">
//         <div id="check" className="my-1">
//           <h2 className="font-medium text-2xl">{name}</h2>
//         </div>
//         <div className="flex gap-3 my-3 ">
//           <Todoinfo label={"5"} svg={atta} />{" "}
//           <span className="text-[#aeafaf]">•</span>
//           <Todoinfo label={"12"} svg={comm} />{" "}
//           <span className="text-[#aeafaf]">•</span>
//           <Todoinfo label={"22 Jan 2023"} svg={cal} />
//         </div>
//         <div className="">
//           <Tasktype type={"Meeting"} />
//         </div>
//       </div>
//       <div className="flex ml-[50vw]">
//         <div className="flex items-center justify-center">
//           <img src={pencil} className="h-3" alt="" />
//         </div>
//         <div className="flex items-center justify-center">
//           <img src={del} alt="" className="h-3" />
//         </div>
//       </div>
//     </div>
//   );
// };

const NotDoneTodo = ({ name, onToggleCompleted }) => {
  return (
    <div className="flex hover:bg-oran-700 font-AlbertSans p-2 mx-6 my-5 border-2 border-gray-200 border-solid rounded-xl cursor-pointer relative">
      <div className="m-2 pt-0.5">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            onClick={onToggleCompleted}
          />
        </label>
      </div>
      <div className="mx-2 flex-grow" onClick={onToggleCompleted}>
        {" "}
        {/* Added flex-grow to this div */}
        <div id="check" className="my-1">
          <h2 className="font-medium text-2xl">{name}</h2>
        </div>
        <div className="flex gap-3 my-3">
          <Todoinfo label={"5"} svg={atta} />{" "}
          <span className="text-[#aeafaf]">•</span>
          <Todoinfo label={"12"} svg={comm} />{" "}
          <span className="text-[#aeafaf]">•</span>
          <Todoinfo label={"22 Jan 2023"} svg={cal} />
        </div>
        <div className="mb-2">
          <Tasktype type={"Meeting"} />
        </div>
      </div>
      <div className="flex gap-3">
        {" "}
        {/* Added absolute positioning and flex */}
        <div className="flex items-center justify-center">
          <img src={pencil} className="h-[2vw]" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={del} alt="" className="h-[2vw]" />
        </div>
      </div>
    </div>
  );
};

export default NotDoneTodo;
