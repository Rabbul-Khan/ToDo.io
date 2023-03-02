import { setCurrentDate } from "./setCurrentDate";

export const renderProjectTaskList = (projectId) => {
  const template = document.querySelector("template");
  const content = template.content.cloneNode(true);

  const taskContainerNode = content.querySelector(".task-list-container");
  taskContainerNode.setAttribute("UID", projectId);

  const mainContentNode = document.getElementsByClassName(
    "main-container__main-content"
  )[0];

  mainContentNode.appendChild(content);
  setCurrentDate();

  // const projectTaskLists = mainContentNode.children;
  // for (let i = 0; i < projectTaskLists.length; i++) {
  //   projectTaskLists[i].style.display = "none";
  // }
};
