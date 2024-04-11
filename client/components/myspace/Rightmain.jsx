import React from "react";
import Navbar from "./Navbar";
import MainHeading from "./MainHeading";
import Todocomp from "./Todocomp";
import useTodos from "../../hooks/useTodos";
import { useRecoilState } from "recoil";
import { currentTodosSelector } from "../../store/selectors";

const Rightmain = ({ handleTodoClick }) => {
  const { todos, loading, error } = useTodos();
  // console.log("Use todo", todos);

  const [currentTodos, setCurrentTodos] = useRecoilState(currentTodosSelector);

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
        {loading && <div>Loading ...</div>}
        {error && <div>Error: {error}</div>}
        {!loading &&
          currentTodos.map((todo) => (
            <Todocomp
              key={todo._id}
              todo={todo}
              onClick={() => handleTodoClick(todo)}
            />
          ))}
      </div>
    </div>
  );
};

export default Rightmain;
