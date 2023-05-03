import React, { useState } from "react";
import ToDo from "./components/ToDo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

// calling nanoid() gives all children unique ids
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  // passing props from child (Form) to parent (App) by creating a function in parent (App) that expects data and passing that function to the child (Form)
  // also called a callback prop (a function as a prop)
  const addTask = (taskName) => {
    // alert(taskName);
    const newTask = {
      id: `toDo-${nanoid()}`,
      name: taskName,
      completed: false,
    };
    console.log(newTask);
    // spread operator to add new task to existing tasks array
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    console.log(tasks[0]);
    const updatedTasks = tasks.map((task) => {
      // if this task id matches that of the edited task id
      if (id === task.id) {
        console.log(id);
        console.log(task.id);
        // use spread operator to make a new object
        // the "completed" prop is flipped
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    // give new array updatedTasks to the setTasks state
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    console.log(id);
  };

  // map over the data from index.js
  const taskList = tasks.map((task) => (
    <ToDo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  // dynamic heading text in accordance with # of tasks remaining
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>To Do or Not To Do</h1>
      {/* passing the task as prop to the child (Form) so we can obtain the data (new task name) */}
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {/* <FilterButton />
        <FilterButton />
        <FilterButton /> */}
      </div>
      <h2 id="list-heading">{headingText}</h2>
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
