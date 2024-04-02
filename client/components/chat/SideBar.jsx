import React from "react";
import SearchInput from "./SearchInput";

const SideBar = () => {
  return (
    <div className="border-r p-4 border-white flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <h1>Conversatiosn</h1>
    </div>
  );
};

export default SideBar;
