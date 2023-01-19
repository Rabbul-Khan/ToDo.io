import { task } from "./task.js";

export const taskAdd = (title, dueDate, priority) => {
  let newTask = new task(title, dueDate, priority);
  let taskContainer = document.getElementsByClassName("task-container")[0];
  let newTaskNode = document.createElement("div");
  newTaskNode.classList.add("task");
  if (priority === "high") {
    newTaskNode.classList.add("high");
  } else if (priority === "mid") {
    newTaskNode.classList.add("mid");
  } else {
    newTaskNode.classList.add("low");
  }
  newTaskNode.textContent =
    newTask.title + " " + newTask.dueDate + " " + priority;
  taskContainer.appendChild(newTaskNode);
};
