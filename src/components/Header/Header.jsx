import "./Header.css";

import { BiPencil } from "react-icons/bi";

function Header({}) {
  return (
    <header>
      <h1>Minhas tarefas</h1>
      <span className="icon">
        <BiPencil />
      </span>

      {/* <form>
        <input ref={taskNameRef} type="text" />
        <button onClick={handleAddTask} className="add-btn" type="submit">
          <MdAdd size={24} color="#FEFEFE" />
        </button>
      </form> */}
    </header>
  );
}

export default Header;
