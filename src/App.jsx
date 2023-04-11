import { useState } from "react";

import List from "./components/List/List";

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
    const newTask = {
      id: generateId(),
      content,
      status,
    };

    setTasks((prev) => {
      return [...prev, newTask];
    });
  }

  return (
    <div className="App">
      <div className="board">
        <List
          todo={true}
          title="Todo"
          taskStatus="todo"
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          tasks={tasks.filter((task) => task.status === "todo")}
        />
        <List
          title="In Progress"
          taskStatus="inProgress"
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          tasks={tasks.filter((task) => task.status === "inProgress")}
        />
        <List
          title="Done"
          taskStatus="dfunction handone"
          handleAddTask={handleAddTask}
          handleUpdateTask={handleUpdateTask}
          tasks={tasks.filter((task) => task.status === "done")}
        />
      </div>
    </div>
  );
}

export default App;
