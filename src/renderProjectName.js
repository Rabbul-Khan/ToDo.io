export const renderProjectName = (projectName) => {
  const projectContainerNode = document.getElementsByClassName(
    "sidebar__project-container"
  )[0];
  const newProjectNode = document.createElement("div");
  newProjectNode.classList.add("project-container__project");

  const nameNode = document.createElement("div");
  nameNode.classList.add("project-container__project-name");
  nameNode.textContent = projectName;

  newProjectNode.append(nameNode);
  projectContainerNode.appendChild(newProjectNode);
};
