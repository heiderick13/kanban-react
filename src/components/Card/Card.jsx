import "./Card.css";

import { BsTrash3 } from "react-icons/bs";
import { MdOutlineArrowCircleRight } from "react-icons/md";

function Card({ id, content, taskStatus, handleUpdateTask, handleDeleteTask }) {
  function handleForwardTask() {
    if (taskStatus === "todo") {
      handleUpdateTask(id, content, "inProgress");
    }

    if (taskStatus === "inProgress") {
      handleUpdateTask(id, content, "done");
    }
  }

  function deleteTask() {
    handleDeleteTask(id);
  }

  return (
    <div className="card" draggable="true">
      <div className="card-header">
        <div className="label"></div>
      </div>
      <div className="card-content">
        <p>{content}</p>
        {taskStatus != "done" && (
          <MdOutlineArrowCircleRight
            id={taskStatus}
            className="icon right"
            onClick={handleForwardTask}
          />
        )}
        <BsTrash3 onClick={deleteTask} className="icon" />
      </div>
    </div>
  );
}

export default Card;
