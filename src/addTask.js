// Creates a new Task object.

import { createOutputNode } from "./createOutputNode.js";
import { task } from "./task.js";

export const addTask = (title, description, dueDate, priority) => {
  const newTask = new task(title, description, dueDate, priority);
  createOutputNode(newTask.title, newTask.description, newTask.priority);
};
