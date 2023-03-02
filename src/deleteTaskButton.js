// When the delete button is clicked the task is deleted.

export const deleteTaskButton = () => {
  const deleteTaskButtonNode = document.getElementsByClassName(
    "task-container__icons-delete"
  );

  for (let i = 0; i < deleteTaskButtonNode.length; i++) {
    if (deleteTaskButtonNode[i].getAttribute("listener") !== "true") {
      deleteTaskButtonNode[i].addEventListener("click", (event) => {
        const taskToRemove = event.target.parentElement.parentElement;
        taskToRemove.remove();
      });
      deleteTaskButtonNode[i].setAttribute("listener", "true");
    }
  }
};
