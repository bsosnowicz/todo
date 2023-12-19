export type Category = "general" | "work" | "gym" | "shopping";

export type Task = {
  name: string;
  finished: boolean;
  category?: Category;
  id: string;
};
