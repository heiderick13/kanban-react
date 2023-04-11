import { useRef } from "react";

import Card from "../Card/Card";

import { MdAdd } from "react-icons/md";

import "./List.css";

function List({
  todo,
  title,
  handleAddTask,
  handleUpdateTask,
  handleDeleteTask,
  tasks,
  taskStatus,
}) {
  const newTaskContent = useRef();

  function addTask(e) {
    handleAddTask(e, newTaskContent.current.value, taskStatus);
    newTaskContent.current.value = "";
  }

  return (
    <div className="list">
      <div className="list-header ">
        <h2 className="list-name">{title}</h2>
        {todo && (
          <form className="flex">
            <input ref={newTaskContent} className="new-task" type="text" />
            <button onClick={addTask} className="add-btn" type="submit">
              <MdAdd size={24} color="#fefefe" />
            </button>
          </form>
        )}
      </div>
      <ul className="tasks">
        {tasks.map((task) => {
          return (
            <Card
              id={task.id}
              key={task.id}
              content={task.content}
              taskStatus={task.status}
              handleUpdateTask={handleUpdateTask}
              handleDeleteTask={handleDeleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default List;
