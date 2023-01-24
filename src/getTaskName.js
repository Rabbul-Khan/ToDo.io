// Returns the task name set for the task.

export const getTaskName = (name) => {
  const taskNameNode = document.getElementsByClassName(
    "form__input-task-name"
  )[0];
  const taskName = taskNameNode.value;
  return taskName;
};
