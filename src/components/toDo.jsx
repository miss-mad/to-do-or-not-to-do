import React from "react";

export default function ToDo(
  { id, name, completed, toggleTaskCompleted, deleteTask },
  props
) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          /* onChange={toggleTaskCompleted} */
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group"></div>
    </li>
  );
}

{
  /* <button type="button" className="btn">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
         onClick={() => deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{name}</span>
        </button> */
}
