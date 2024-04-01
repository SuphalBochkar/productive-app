import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MainHeading from "./MainHeading";
import Todocomp from "./Todocomp";
import axios from "axios";

const Rightmain = () => {
  let side = true;

  const [Todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/todo/all")
      .then((res) => {
        setTodos(res.data); 
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="fixed bg-white top-0 w-[60vw]">
        <Navbar />
        <MainHeading />
      </div>
      <div className="h-full mt-[18rem]">
        {Todos.map((todo, index) => (
          <Todocomp key={index} name={todo.title} /> 
        ))}
      </div>
    </div>
  );
};

export default Rightmain;
