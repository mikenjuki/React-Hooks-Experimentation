import React from "react";
import { useState, useRef, useEffect } from "react";

const UseRefTwo = () => {
  const renders = useRef(1);
  const prevName = useRef("");

  const [name, setName] = useState("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <>
      <h3 className="display-6">Renders: {renders.current}</h3>

      <h4>Previous Name State:{prevName.current}</h4>

      <input
        type="text"
        className="form-control mb-3"
        value={name}
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />
    </>
  );
};

export default UseRefTwo;
