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

  const deleteItem = (index) => {
    setTasks(tasks.filter((val , item) => item !== index));
  };

  const editItem = (index) => {
    const newValue = prompt("Enter new Task", tasks[index]);
    setTasks(tasks.filter((val, item) => item !== index));
    setTasks((tasks) => [...tasks, newValue]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-300 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
            To-Do List
          </h1>
          <div className="flex mb-4 gap-2">
            <input
              className="flex-grow p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter Your Task"
              value={newtasks}
              onChange={handleInputChange}
            />
            <button
              className="bg-blue-500 text-white px-3 py-0 text-xs sm:text-sm sm:px-4 sm:py-2 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
              onClick={addTasks}
            >
              Add Item
            </button>
          </div>

          <ul className="space-y-2">
            {tasks.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-200 p-3 rounded-lg shadow-sm transition-all transform hover:scale-105 animate-fadeIn"
              >
                <p className="text-gray-800">{item}</p>
                <div className="flex gap-3">
                  <span
                    className="text-blue-500 hover:underline cursor-pointer text-sm sm:text-base transition-all hover:scale-110"
                    onClick={() => editItem(index)}
                  >
                    Edit
                  </span>
                  <span
                    className="text-red-500 hover:underline cursor-pointer text-sm sm:text-base transition-all hover:scale-110"
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default ToDoList;
