import css from "./TasksList.module.css";
import { Task } from "../../types/types";
import { useState } from "react";

interface TasksListProps {
  tasksList: Task[];
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TasksList: React.FC<TasksListProps> = ({ tasksList, setTasksList }) => {
  const handleCheckbox = (taskId: string) => {
    setTasksList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, finished: !task.finished } : task
      )
    );
  };

  const handleDeleteButton = (id: string) => {
    const newTasksList = tasksList.filter((task) => task.id !== id);
    setTasksList(newTasksList);
  };

  return (
    <div className={css.container}>
      <ul className={css.itemList}>
        <h3>GENERAL</h3>
        {tasksList
          .filter((task) => task.category === "general")
          .map((task) => (
            <li>
              <a>{task.name}</a>
              <input
                type="checkbox"
                className={css.checkbox}
                onChange={() => handleCheckbox(task.id)}
                checked={task.finished}
              />
              {task.finished ? (
                <button
                  onClick={() => {
                    handleDeleteButton(task.id);
                  }}
                  className={css.deleteButton}
                >
                  X
                </button>
              ) : (
                ""
              )}
            </li>
          ))}
      </ul>
      <ul className={css.itemList}>
        <h3>WORK</h3>
        {tasksList
          .filter((task) => task.category === "work")
          .map((task) => (
            <li>
              <a>{task.name}</a>
              <input
                type="checkbox"
                className={css.checkbox}
                onChange={() => handleCheckbox(task.id)}
                checked={task.finished}
              />
              {task.finished ? (
                <button
                  onClick={() => {
                    handleDeleteButton(task.id);
                  }}
                  className={css.deleteButton}
                >
                  X
                </button>
              ) : (
                ""
              )}
            </li>
          ))}
      </ul>
      <ul className={css.itemList}>
        <h3>GYM</h3>
        {tasksList
          .filter((task) => task.category === "gym")
          .map((task) => (
            <li>
              <a>{task.name}</a>
              <input
                type="checkbox"
                className={css.checkbox}
                onChange={() => handleCheckbox(task.id)}
                checked={task.finished}
              />
              {task.finished ? (
                <button
                  onClick={() => {
                    handleDeleteButton(task.id);
                  }}
                  className={css.deleteButton}
                >
                  X
                </button>
              ) : (
                ""
              )}
            </li>
          ))}
      </ul>
      <ul className={css.itemList}>
        <h3>SHOPPING</h3>
        {tasksList
          .filter((task) => task.category === "shopping")
          .map((task) => (
            <li>
              <a>{task.name}</a>
              <input
                type="checkbox"
                className={css.checkbox}
                onChange={() => handleCheckbox(task.id)}
                checked={task.finished}
              />
              {task.finished ? (
                <button
                  onClick={() => {
                    handleDeleteButton(task.id);
                  }}
                  className={css.deleteButton}
                >
                  X
                </button>
              ) : (
                ""
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TasksList;
