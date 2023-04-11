import Card from "../Card/Card";

import { MdAdd } from "react-icons/md";

import "./List.css";

function List({
  todo,
  title,
  handleAddTask,
  handleUpdateTask,
  tasks,
  taskStatus,
}) {
  function addTask() {
    handleAddTask("Nova Tarefa", taskStatus);
  }

  return (
    <div className="list">
      <div className="list-header flex">
        <h2 className="list-name">{title}</h2>
        {todo && (
          <button onClick={addTask} className="add-btn" type="submit">
            <MdAdd size={24} color="#fefefe" />
          </button>
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
            />
          );
        })}
      </ul>
    </div>
  );
}

export default List;
