import React from "react";
import { useRef } from "react";

const UseRefExample = () => {
  const firstNameRef = useRef();
  const paraRef = useRef();

  const submitForm = () => {
    paraRef.current.innerText = "Submitted";
    setTimeout(() => {
      paraRef.current.innerText = "";
    }, 3000);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(1, 2, 3);
          submitForm();
        }}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          ref={firstNameRef}
          type="text"
          name="firstName"
          className="form-control mb-2"
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <p ref={paraRef}></p>
      </form>
    </div>
  );
};

export default UseRefExample;
