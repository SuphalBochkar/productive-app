import React from "react";

const Sideprofile = ({ label, icon }) => {
  return (
    <div className="px-3 py-3 cursor-pointer flex items-center rounded-xl border text-2xl bg-white">
      <div className="flex justify-center items-center border-0 w-9 h-9 rounded-xl">
        <img src={icon} alt="" className="h-5  inline-block align-middle " />
      </div>
      <div className="tracking-normal font-semibold">{label}</div>
    </div>
  );
};

export default Sideprofile;
