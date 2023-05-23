import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const CustomHookTwo = () => {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            type="text"
            value={task}
            name="task"
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add to Storage
        </button>
      </form>

      <hr />

      {tasks.map((item) => (
        <h3 key={task.date}>{item.task}</h3>
      ))}
    </>
  );
};

export default CustomHookTwo;
