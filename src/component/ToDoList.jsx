import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newtasks, setNewTasks] = useState("");
  const handleInputChange = (e) => {
    setNewTasks(e.target.value);
  };
  const addTasks = () => {
    setTasks((tasks) => [...tasks, newtasks]);
    setNewTasks("");
  };

  const deleteItem = () => {

  };
  return (
    <>
      <div className="flex flex-col justify-center items-stretch w-full h-screen px-10">
        <div className="flex gap-4">
          <input type="text" placeholder="Enter Your Task" value={newtasks} onChange={handleInputChange} />
          <button onClick={addTasks}>Add Item</button>
        </div>

        <ul className="mx">
          {tasks.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <p>{item}</p>
              <div>
                <span onClick={editItem}>Edit</span>
                <span onClick={deleteItem}>Delete</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
