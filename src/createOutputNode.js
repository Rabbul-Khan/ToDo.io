// Outputs the task title and description on the task list and sets the color according to the priority.

export const createOutputNode = (title, description, priority) => {
  const taskContainerNode =
    document.getElementsByClassName("task-container")[0];
  const newTaskNode = document.createElement("div");
  newTaskNode.classList.add("task-container__task");

  const titleNode = document.createElement("div");
  titleNode.classList.add("task-container__task-title");
  titleNode.textContent = title;

  const descriptionNode = document.createElement("div");
  descriptionNode.classList.add("task-container__task-description");
  descriptionNode.textContent = description;

  if (priority === "High") {
    newTaskNode.classList.add("task-container__task-priority--high");
  } else if (priority === "Mid") {
    newTaskNode.classList.add("task-container__task-priority--mid");
  } else {
    newTaskNode.classList.add("task-container__task-priority--low");
  }

  newTaskNode.append(titleNode, descriptionNode);
  taskContainerNode.appendChild(newTaskNode);
};
