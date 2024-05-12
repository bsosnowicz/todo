import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import TasksList from "./TasksList/TasksList";
import { Task } from "../types/types";

function App() {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  return (
    <div className="container">
      <h2 className="title">ToDo List</h2>
      <Form tasksList={tasksList} setTasksList={setTasksList} />
      <TasksList tasksList={tasksList} setTasksList={setTasksList} />
    </div>
  );
}

export default App;
