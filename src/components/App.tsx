import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import TasksList from "./TasksList/TasksList";
import { Task } from "../types/types";

function App() {
  const [tasksList, setTasksList] = useState<Task[]>([
    { name: "pranie", finished: true, category: "general", id: "1" },
    { name: "plecy", finished: false, category: "gym", id: "2" },
    { name: "barki", finished: false, category: "gym", id: "3" },
    { name: "groszek", finished: true, category: "shopping", id: "4" },
    { name: "mycie podłóg", finished: true, category: "general", id: "5" },
    { name: "start a new project", finished: true, category: "work", id: "6" },
  ]);

  return (
    <div className="container">
      <h2 className="title">ToDo List</h2>
      <Form tasksList={tasksList} setTasksList={setTasksList} />
      <TasksList tasksList={tasksList} setTasksList={setTasksList} />
    </div>
  );
}

export default App;
