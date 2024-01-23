import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import TasksList from "./TasksList/TasksList";
import { Task } from "../types/types";

function App() {
  const [tasksList, setTasksList] = useState<Task[]>([
    { name: "tak", finished: true, category: "general", id: "1" },
    { name: "nie", finished: false, category: "gym", id: "2" },
    { name: "nie", finished: false, category: "gym", id: "3" },
    { name: "tak", finished: true, category: "shopping", id: "4" },
    { name: "tak", finished: true, category: "general", id: "5" },
    { name: "tak", finished: true, category: "work", id: "6" },
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
