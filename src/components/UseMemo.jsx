import React from "react";
import { useState, useRef, useEffect, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  }, []);

  const sqrt = useMemo(() => getSqrt(number), [number]);

  return (
    <>
      <div>
        <h3>Renders: {renders.current}</h3>

        <input
          type="number"
          value={number}
          className="form-control w-25"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />

        <h2 className="my-3">Square Root: {sqrt}</h2>

        <button
          className="btn btn-primary mt-2"
          onClick={() => {
            setInc((prevState) => {
              console.log(prevState);
              return prevState + 1;
            });
          }}
        >
          Re-Render
        </button>
      </div>
    </>
  );
};

const getSqrt = (n) => {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log("Expensive func called!!");
  return Math.sqrt(n);
};

export default UseMemo;
