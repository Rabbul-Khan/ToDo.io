// Outputs the task title and description on the task list and sets the color according to the priority.

export const renderTask = (title, description, priority, dueDate) => {
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
      if (title) {
        titleNode.textContent = title;
      } else {
        titleNode.textContent = "No Title";
      }

      const descriptionNode = document.createElement("div");
      descriptionNode.classList.add("task-container__task-description");
      if (description) {
        descriptionNode.textContent = description;
      } else {
        descriptionNode.textContent = "No description";
      }

      const dueDateAndDeleteNode = document.createElement("div");
      dueDateAndDeleteNode.classList.add("task-container__due-date-and-delete");

      const dueDateNode = document.createElement("div");
      dueDateNode.classList.add("task-container__task-due-date");
      if (dueDate === "Date undefined undefined") {
        dueDateNode.textContent = "No due date set";
      } else {
        dueDateNode.textContent = `Due by ${dueDate}`;
      }

      const deleteIconNode = document.createElement("div");
      deleteIconNode.classList.add(
        "task-container__icons-delete",
        "icon",
        "material-icons"
      );
      deleteIconNode.setAttribute("listener", "false");
      deleteIconNode.textContent = "delete";

      if (priority === "High") {
        newTaskNode.classList.add("task-container__task-priority--high");
      } else if (priority === "Mid") {
        newTaskNode.classList.add("task-container__task-priority--mid");
      } else {
        newTaskNode.classList.add("task-container__task-priority--low");
      }

      dueDateAndDeleteNode.append(dueDateNode, deleteIconNode);

      newTaskNode.append(titleNode, descriptionNode, dueDateAndDeleteNode);
      taskContainerNode.appendChild(newTaskNode);
    }
  }
};
