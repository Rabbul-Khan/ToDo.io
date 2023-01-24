export const renderProjectTaskList = () => {
  const template = document.querySelector("template");
  const content = template.content.cloneNode(true);

  const mainContentNode = document.getElementsByClassName(
    "main-container__main-content"
  )[0];

  mainContentNode.appendChild(content);

  // const projectTaskLists = mainContentNode.children;
  // for (let i = 0; i < projectTaskLists.length; i++) {
  //   projectTaskLists[i].style.display = "none";
  // }
};
