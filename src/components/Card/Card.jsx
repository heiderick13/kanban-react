import "./Card.css";

import { BsTrash3 } from "react-icons/bs";
import { MdOutlineArrowCircleRight } from "react-icons/md";

function Card({ id, content, taskStatus }) {
  return (
    <div className="card" draggable="true">
      <div className="card-header">
        <div className="label"></div>
      </div>
      <div className="card-content">
        <p>{content}</p>
        {taskStatus != "done" && (
          <MdOutlineArrowCircleRight className="icon right" />
        )}
        <BsTrash3 className="icon" />
      </div>
    </div>
  );
}

export default Card;
