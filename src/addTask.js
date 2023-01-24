// Creates a new Task object.

import { renderTask } from "./renderTask.js";
import { Task } from "./task.js";

export const addTask = (name, description, dueDate, priority) => {
  const newTask = new Task(name, description, dueDate, priority);
  renderTask(newTask.name, newTask.description, newTask.priority);
};
