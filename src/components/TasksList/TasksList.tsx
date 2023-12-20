import css from "./TasksList.module.css";
import { Task } from "../../types/types";
import { useState } from "react";

const TasksList = () => {
  const [tasksList, setTasksList] = useState<Task[]>([
    { name: "pranie tak", finished: true, category: "general", id: "1" },
    { name: "nie", finished: false, category: "gym", id: "2" },
    { name: "nie", finished: false, category: "gym", id: "3" },
    { name: "tak", finished: true, category: "shopping", id: "4" },
    { name: "tak", finished: true, category: "general", id: "5" },
    { name: "tak", finished: true, category: "work", id: "6" },
  ]);

  const handleCheckbox = (taskId: string) => {
    setTasksList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, finished: !task.finished } : task
      )
    );
  };

  return (
    <ul className={css.list}>
      {tasksList.map((task) => {
        return (
          <li>
            <a>{task.name}</a>
            <input
              type="checkbox"
              className={css.checkbox}
              onChange={() => handleCheckbox(task.id)}
              checked={task.finished}
            />
            {task.finished ? (
              <button className={css.deleteButton}>X</button>
            ) : (
              ""
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TasksList;
