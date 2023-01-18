import { task } from "./task.js";

export const taskAdd = (title, dueDate) => {
  let newTask = new task(title, dueDate);
  let taskContainer = document.getElementsByClassName("task-container")[0];
  let newTaskNode = document.createElement("div");
  newTaskNode.textContent = newTask.title + " " + newTask.dueDate;
  taskContainer.appendChild(newTaskNode);
};
