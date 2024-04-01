import React from "react";

const Sideoptions = ({ icon, label }) => {
  return (
    <div className="px-4 py-4 cursor-pointer rounded-xl text-2xl hover:bg-[#ffffff]">
      <img src={icon} alt="" className="h-5 mr-3 inline-block align-middle" />
      <span className="inline-block align-middle font-medium">{label}</span>
    </div>
  );
};

export default Sideoptions;
