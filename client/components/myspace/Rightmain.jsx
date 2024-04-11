import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MainHeading from "./MainHeading";
import Todocomp from "./Todocomp";
import useTodos from "../../hooks/useTodos";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TodoSkeleton from "./TodoSkeleton";

const Rightmain = ({ handleTodoClick, toggle }) => {
  const { todos, loading, error } = useTodos();
  return (
    <div className="w-full border-r-2">
      <div className="bg-white w-full h-[16rem] sticky top-0 z-50">
        <Navbar />
        <MainHeading />
      </div>
      <div
        className="w-full overflow-y-auto"
        style={{ maxHeight: `calc(100vh - 16rem)` }}
      >
        {/* {loading && <div>Loading ...</div>} */}
        {/* {loading && <Skeleton count={5} />} */}
        {loading && <TodoSkeleton n={5} />}
        {error && <div>Error: {error}</div>}
        {!loading &&
          todos.map((todo, index) => (
            <Todocomp
              key={index}
              name={todo.title}
              onClick={() => handleTodoClick(todo)}
              toggle={toggle}
            />
          ))}
      </div>
    </div>
  );
};

export default Rightmain;
