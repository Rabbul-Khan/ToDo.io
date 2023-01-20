export const createOutputNode = (title, description, priority) => {
  let taskContainer = document.getElementsByClassName("task-container")[0];
  let newTaskNode = document.createElement("div");
  newTaskNode.classList.add("task");
  if (priority === "High") {
    newTaskNode.classList.add("high");
  } else if (priority === "Mid") {
    newTaskNode.classList.add("mid");
  } else {
    newTaskNode.classList.add("low");
  }

  let titleNode = document.createElement("div");
  titleNode.classList.add("task__title");
  titleNode.textContent = title;

  let descriptionNode = document.createElement("div");
  descriptionNode.classList.add("task__description");
  descriptionNode.textContent = description;

  newTaskNode.append(titleNode, descriptionNode);
  taskContainer.appendChild(newTaskNode);
};
