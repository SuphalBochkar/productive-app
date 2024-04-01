import React from "react";
import Navbar from "./Navbar";
import MainHeading from "./MainHeading";
import Todocomp from "./Todocomp";

const Rightmain = () => {
  let side = true;
  return (
    <div className="w-full">
      <div className="fixed bg-white top-0 w-[60vw]">
        <Navbar />
        <MainHeading />
      </div>
      <div className="h-full mt-[18rem]">
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
        <Todocomp name={"Todo"} />
      </div>
    </div>
  );
};

export default Rightmain;
