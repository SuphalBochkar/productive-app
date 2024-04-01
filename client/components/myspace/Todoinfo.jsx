import React from "react";

const Todoinfo = ({ label, svg }) => {
  return (
    <div className="text-gray-400 flex items-center text-base">
      <img src={svg} className="h-5 mr-1" />
      {label}
    </div>
  );
};

export default Todoinfo;
