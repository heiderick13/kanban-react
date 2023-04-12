import { useState, useEffect } from "react";

import List from "./components/List/List";
import Header from "./components/Header/Header";

function generateId() {
  return Date.now();
}

function App() {
  const [tasks, setTasks] = useState([]);

  function handleUpdateTask(id, content, status) {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, content, status };
        } else {
          return task;
        }
      });
    });
  }

  function handleAddTask(e, content, status) {
    e.preventDefault();

    if (content === "") return;

    const newTask = {
      id: generateId(),
      content,
      status,
    };

    setTasks((prev) => {
      return [...prev, newTask];
    });
  }

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id != id);
    setTasks(updatedTasks);
  }

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("localTasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <div className="board">
        <List
          todo={true}
          title="Todo"
          taskStatus="todo"
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
          tasks={tasks.filter((task) => task.status === "todo")}
        />
        <List
          title="In Progress"
          taskStatus="inProgress"
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
          tasks={tasks.filter((task) => task.status === "inProgress")}
        />
        <List
          title="Done"
          taskStatus="dfunction handone"
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
          tasks={tasks.filter((task) => task.status === "done")}
        />
      </div>
    </div>
  );
}

export default App;
