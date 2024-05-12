import { useState } from "react";
import css from "./Form.module.css";
import { Category, Task } from "../../types/types";

interface FormProps {
  tasksList: Task[];
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Form: React.FC<FormProps> = ({ tasksList, setTasksList }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("general");
  const [name, setName] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const categories: Category[] = ["general", "work", "gym", "shopping"];

  const addTask = (name: string) => {
    if (!name) {
      alert("Please name your task!");
    } else {
      const newTask: Task = {
        name,
        finished: isFinished,
        category: selectedCategory,
        id: String(Math.floor(Math.random() * 9999997)),
      };
      setTasksList([...tasksList, newTask]);
      tasksList.push(newTask);
      localStorage.setItem("task", JSON.stringify(tasksList));
    }
  };

  // let tasksList: Task[] = JSON.parse(localStorage.getItem("taskslist")) || [];

  // const loadTasksFromLocalStorage = () => {
  //   const storedTasks = localStorage.getItem("tasksList");
  //   if (storedTasks) {
  //     tasksList = JSON.parse(storedTasks);
  //   }
  // };

  return (
    <div>
      <div className={css.container}>
        <input
          onChange={(e) => {
            setIsFinished(e.target.checked);
          }}
          className={css.checkbox}
          type="checkbox"
        />
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className={css.input}
        />
        <button
          onClick={() => {
            addTask(name);
          }}
          className={css.button}
        >
          +
        </button>
      </div>
      <ul className={css.categoryList}>
        {categories.map((category) => {
          return (
            <li className={css.categoriesItem}>
              <a>{category.toUpperCase()}</a>
              <input
                onChange={(e) =>
                  setSelectedCategory(e.target.value as Category)
                }
                type="radio"
                name="category"
                value={category}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Form;
