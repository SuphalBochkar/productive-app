import React from "react";
import Tasktype from "./Tasktype";
import Todoinfo from "./Todoinfo";
import cal from "../../src/assets/calender.svg";
import comm from "../../src/assets/comments.svg";
import atta from "../../src/assets/attachment.svg";

const Todocomp = ({ name }) => {
  return (
    <div className="flex hover:bg-oran-700 font-AlbertSans p-2 mx-6 my-5 border-2 border-gray-200 border-solid rounded-xl">
      <div className="m-2 pt-0.5">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
          />
        </label>
      </div>
      <div>
        <div id="check" className="my-1 ">
          <h2 className="font-medium text-2xl">{name}</h2>
        </div>
        <div className="flex gap-3 my-3">
          <Todoinfo label={"5"} svg={atta} />{" "}
          <span className="text-[#aeafaf]">•</span>
          <Todoinfo label={"12"} svg={comm} />{" "}
          <span className="text-[#aeafaf]">•</span>
          <Todoinfo label={"22 Jan 2023"} svg={cal} />
        </div>
        <div className="">
          <Tasktype type={"Meeting"} />
        </div>
      </div>
    </div>
  );
};

export default Todocomp;
