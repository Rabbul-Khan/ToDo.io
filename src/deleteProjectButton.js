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
