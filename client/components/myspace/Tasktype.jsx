import React from "react";

const Tasktype = ({ type }) => {
  return (
    <div className="rounded-2xl border-solid cursor-pointer border text-center border-orange-500 text-orange-500 bg-orange-100 inline-block px-2 py-1">
      {type}
    </div>
  );
};

export default Tasktype;
