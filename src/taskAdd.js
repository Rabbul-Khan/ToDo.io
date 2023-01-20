import { createOutputNode } from "./createOutputNode.js";
import { task } from "./task.js";

export const taskAdd = (title, description, dueDate, priority) => {
  let newTask = new task(title, description, dueDate, priority);

  createOutputNode(newTask.title, newTask.description, newTask.priority);
};
