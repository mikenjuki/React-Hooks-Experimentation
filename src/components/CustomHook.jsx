import React from "react";
import useFetch from "./hooks/useFetch";

const CustomHook = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    console.log("Loading data...");
    return <h3>Loading...</h3>;
  } else if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Data fetched successfully:", data);
  }

  return (
    <div>
      Custom Hook
      {data && (
        <ol>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default CustomHook;
