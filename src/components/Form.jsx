import React, { useState } from "react";

export default function Form({ addTask }) {
  // useState to capture the new task in the form input
  const [name, setName] = useState("");

  // sends the addTask back to the parent (App) to add the new task to the list
  // at this point, if you type something in the input box and click "add", an alert will fire from the parent (App) with the text that you just typed, letting you know that addTask is successfully going back to the parent after being passed to the child (Form) as a prop
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name);
    // clear input
    setName("");
  };

  // find and set the value of the new task name in the form input
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
