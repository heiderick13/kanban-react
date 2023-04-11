import { useState } from "react";

import List from "./components/List/List";

function generateId() {
  return Date.now();
}

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(content, status) {
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
          tasks={tasks.filter((task) => task.status === "todo")}
        />
        <List
          title="In Progress"
          taskStatus="inProgress"
          handleAddTask={handleAddTask}
          tasks={tasks.filter((task) => task.status === "inProgress")}
        />
        <List
          title="Done"
          taskStatus="done"
          handleAddTask={handleAddTask}
          tasks={tasks.filter((task) => task.status === "done")}
        />
      </div>
    </div>
  );
}

export default App;
