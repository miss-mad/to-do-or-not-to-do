import React from "react";
import ToDo from "./components/ToDo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App({ tasks }) {
  // passing props from child (Form) to parent (App) by creating a function in parent (App) that expects data and passing that function to the child (Form)
  // also called a callback prop (a function as a prop)
  const addTask = (taskName) => alert(taskName);

  // map over the data from index.js
  const taskList = tasks.map((task) => (
    <ToDo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>To Do or Not To Do</h1>
      {/* passing the task as prop to the child (Form) so we can obtain the data (new task name) */}
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
