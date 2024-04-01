import React, { useState } from "react";
import Todoinfo from "./Todoinfo";
import Tasktype from "./Tasktype";

const DoneTodo = ({ label }) => {
  const [Done, setDone] = useState(true);

  return (
    <div className="flex bg-[#f6f6f6] font-AlbertSans p-2 mx-6 my-5 border-2 border-gray-200 border-solid rounded-xl">
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
          <h2 className="font-medium text-2xl line-through text-[#958fb3]">
            {label}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DoneTodo;
