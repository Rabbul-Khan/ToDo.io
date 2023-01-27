// When the delete button is clicked the task is deleted.

export const deleteTaskButton = () => {
  const deleteTaskButtonNode = document.getElementsByClassName(
    "task-container__icons-delete"
  );

  for (let i = 0; i < deleteTaskButtonNode.length; i++) {
    deleteTaskButtonNode[i].addEventListener("click", (event) => {
      const taskToRemove = event.target.parentElement;
      taskToRemove.remove();
    });
  }
};
