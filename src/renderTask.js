// Outputs the task title and description on the task list and sets the color according to the priority.

export const renderTask = (title, description, priority) => {
  const sideBarProjectContainerChildren = document.getElementsByClassName(
    "sidebar__project-container"
  )[0].children;

  for (let i = 0; i < sideBarProjectContainerChildren.length; i++) {
    if (sideBarProjectContainerChildren[i].classList.contains("active")) {
      const taskContainerNode =
        document.getElementsByClassName("task-container")[i];
      const newTaskNode = document.createElement("div");
      newTaskNode.classList.add("task-container__task");

      const titleNode = document.createElement("div");
      titleNode.classList.add("task-container__task-title");
      titleNode.textContent = title;

      const descriptionNode = document.createElement("div");
      descriptionNode.classList.add("task-container__task-description");
      descriptionNode.textContent = description;

      const deleteIconNode = document.createElement("div");
      deleteIconNode.classList.add(
        "task-container__icons-delete",
        "icon",
        "material-icons"
      );
      deleteIconNode.textContent = "delete";

      if (priority === "High") {
        newTaskNode.classList.add("task-container__task-priority--high");
      } else if (priority === "Mid") {
        newTaskNode.classList.add("task-container__task-priority--mid");
      } else {
        newTaskNode.classList.add("task-container__task-priority--low");
      }

      newTaskNode.append(titleNode, descriptionNode, deleteIconNode);
      taskContainerNode.appendChild(newTaskNode);
    }
  }
};
