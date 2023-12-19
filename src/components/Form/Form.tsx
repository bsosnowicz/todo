import { useState } from "react";
import css from "./Form.module.css";
import { Category } from "../../types/types";

const Form = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("general");

  const categories: Category[] = ["general", "work", "gym", "shopping"];

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
        <input className={css.checkbox} type="checkbox" />
        <input className={css.input} />
        <button className={css.button}>+</button>
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
