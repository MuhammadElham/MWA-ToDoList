import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newtasks, setNewTasks] = useState("");
  const handleInputChange = (e) => {
    setNewTasks(e.target.value);
  };
  const addTasks = () => {
    let result = setTasks((tasks) => [...tasks, newtasks]);
    console.log(result);
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <input type="text" placeholder="Enter Your Task" value={newtasks} onChange={handleInputChange} />
      <button onClick={addTasks}>Add Item</button>
    </div>
  );
};

export default ToDoList;
