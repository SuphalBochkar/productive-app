import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MainHeading from "./MainHeading";
import Todocomp from "./Todocomp";
import useTodos from "../../hooks/useTodos";

const Rightmain = () => {
  const { todos, loading, error } = useTodos();

  return (
    <div className="w-full">
      <div className="fixed bg-white top-0 w-[60vw]">
        <Navbar />
        <MainHeading />
      </div>
      <div className="h-full mt-[18rem]">
        {loading && <div>Loading ...</div>}
        {error && <div>Error: {error}</div>}
        {!loading &&
          todos.map((todo, index) => (
            <Todocomp key={index} name={todo.title} />
          ))}
      </div>
    </div>
  );
};

export default Rightmain;
