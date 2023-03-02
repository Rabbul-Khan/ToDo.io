export const renderProjectName = (projectName) => {
  const projectContainerNode = document.getElementsByClassName(
    "sidebar__project-container"
  )[0];
  const newProjectNode = document.createElement("div");
  newProjectNode.classList.add("project-container__project");

  const projectNameIconNode = document.createElement("div");
  projectNameIconNode.classList.add("project-container__project-name-and-icon");

  const projectIconNode = document.createElement("span");
  projectIconNode.classList.add(
    "sidebar__icon-project",
    "icon",
    "material-icons"
  );
  projectIconNode.textContent = "radio_button_checked";

  const nameNode = document.createElement("div");
  nameNode.classList.add("project-container__project-name");
  nameNode.textContent = projectName;

  const deleteIconNode = document.createElement("span");
  deleteIconNode.classList.add(
    "sidebar__icon-delete",
    "icon",
    "material-icons"
  );
  deleteIconNode.setAttribute("listener", "false");
  deleteIconNode.textContent = "delete";

  projectNameIconNode.append(projectIconNode, nameNode, deleteIconNode);
  newProjectNode.append(projectNameIconNode);
  projectContainerNode.appendChild(newProjectNode);
};
