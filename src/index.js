import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const data = [
  { id: "toDo-0", name: "Eat", completed: true },
  { id: "toDo-1", name: "Sleep", completed: false },
  { id: "toDo-2", name: "Repeat", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={data} />
  </React.StrictMode>
);
