import React from "react";
import { useState } from "react";

import ToDo from "./ToDo";

const UseRefThree = () => {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      <h1>Show ToDo</h1>
      <div>{showTodo && <ToDo />}</div>

      <button
        className="btn btn-primary"
        onClick={() => {
          setShowTodo(!showTodo);
        }}
      >
        Toggle ToDo
      </button>
    </div>
  );
};

export default UseRefThree;
