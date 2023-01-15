import { task } from "./task.js";

export const taskAdd = (title) => {
  let newTask = new task(title);
  let taskContainer = document.getElementsByClassName("task-container")[0];

  let newTaskNode = document.createElement("div");
  newTaskNode.textContent = newTask.title;
  taskContainer.appendChild(newTaskNode);
};
