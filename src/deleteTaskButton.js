// When the delete button is clicked the task is deleted.

export const deleteTaskButton = () => {
  const deleteTaskButtonNode = document.getElementsByClassName(
    "task-container__icons-delete"
  );

  const lastDeleteTaskButtonNode =
    deleteTaskButtonNode[deleteTaskButtonNode.length - 1];

  lastDeleteTaskButtonNode.addEventListener("click", () => {
    const taskToDelete = lastDeleteTaskButtonNode.parentElement;
    taskToDelete.remove();
  });
};
