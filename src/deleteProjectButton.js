export const deleteProjectButton = (projectId) => {
  const deleteProjectButtonNode = document.getElementsByClassName(
    "sidebar__icon-delete"
  );

  for (let i = 0; i < deleteProjectButtonNode.length; i++) {
    if (deleteProjectButtonNode[i].getAttribute("listener") !== "true") {
      deleteProjectButtonNode[i].addEventListener("click", (event) => {
        const projectToRemove = event.target.closest(
          ".project-container__project"
        );

        // if (projectToRemove.classList.contains("active")) {
        // projectToRemove.classList.remove("active");
        // const closestProjectFromProjectToRemove =
        //   projectToRemove.previousSibling;
        // closestProjectFromProjectToRemove.classList.add("active");
        // console.log(closestProjectFromProjectToRemove);
        // }
        // projectToRemove.classList.remove("active");

        // const inbox = document.getElementsByClassName("inbox")[0];
        // inbox.classList.add("active");

        projectToRemove.remove();
        const taskListContainer = document.getElementsByClassName(
          "task-list-container"
        );

        for (let i = 0; i < taskListContainer.length; i++) {
          if (taskListContainer[i].getAttribute("UID") === projectId) {
            taskListContainer[i].remove();
          }
        }
      });
      deleteProjectButtonNode[i].setAttribute("listener", "true");
    }
  }
};
