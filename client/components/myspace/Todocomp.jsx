import React, { useState } from "react";
import DoneTodo from "./DoneTodo";
import NotDoneTodo from "./NotDoneTodo";

const Todocomp = ({ toggle }) => {
  const [isCompleted, setCompleted] = useState(false);

  const handleToggleCompleted = () => {
    console.log("Clciked");
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
      toggle={toggle}
    />
  );
};

export default Todocomp;
