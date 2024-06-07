import css from "./TasksList.module.css";
import { Task } from "../../types/types";
import { useEffect } from "react";

interface TasksListProps {
  tasksList: Task[];
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TasksList: React.FC<TasksListProps> = ({ tasksList, setTasksList }) => {
  const handleCheckbox = (taskId: string) => {
    const updatedList = tasksList.map((task) => {
      return task.id === taskId ? { ...task, finished: !task.finished } : task;
    });
    setTasksList(updatedList);
    localStorage.setItem("task", JSON.stringify(updatedList));
  };

  const fetchData = () => {
    const listJSON = localStorage.getItem("task");
    let tasks: Task[] = [];
    if (listJSON !== null) {
      tasks = JSON.parse(listJSON);
    }
    setTasksList(tasks);
  };

  const handleDeleteButton = (id: string) => {
    const updatedList = tasksList.filter((item) => item.id !== id);
    localStorage.setItem("task", JSON.stringify(updatedList));
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [setTasksList]);

  const renderTasksList = (category: string) => {
    return tasksList
      .filter((task) => task.category === category)
      .map((task) => (
        <li className={css.itemListitem}>
          <div className={css.buttonsContainer}>
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
            <input
              type="checkbox"
              className={css.checkbox}
              onChange={() => handleCheckbox(task.id)}
              checked={task.finished}
            />
          </div>
          <a>{task.name}</a>
        </li>
      ));
  };

  return (
    <div className={css.container}>
      <ul className={css.itemList}>
        <h3 className={css.categoryHeader}>GENERAL</h3>
        {renderTasksList("general")}
      </ul>
      <ul className={css.itemList}>
        <h3 className={css.categoryHeader}>WORK</h3>
        {renderTasksList("work")}
      </ul>
      <ul className={css.itemList}>
        <h3 className={css.categoryHeader}>GYM</h3>
        {renderTasksList("gym")}
      </ul>
      <ul className={css.itemList}>
        <h3 className={css.categoryHeader}>SHOPPING</h3>
        {renderTasksList("shopping")}
      </ul>
    </div>
  );
};

export default TasksList;
