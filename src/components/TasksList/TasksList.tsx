import css from "./TasksList.module.css";
import { Task } from "../../types/types";

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

  const renderTasksList = (category: string) => {
    return tasksList
      .filter((task) => task.category === category)
      .map((task) => (
        <li className={css.itemListitem}>
          <a>{task.name}</a>
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
