import React, { useState } from "react";
import DoneTodo from "./DoneTodo";
import NotDoneTodo from "./NotDoneTodo";

const Todocomp = ({ name }) => {
  const [isCompleted, setCompleted] = useState(false);

  const handleToggleCompleted = () => {
    setCompleted(!isCompleted);
  };

  return isCompleted ? (
    <DoneTodo
      name={"Go to the gym"}
      onToggleCompleted={handleToggleCompleted}
    />
  ) : (
    <NotDoneTodo
      name={"Go to the gym"}
      onToggleCompleted={handleToggleCompleted}
    />
  );
};

export default Todocomp;
