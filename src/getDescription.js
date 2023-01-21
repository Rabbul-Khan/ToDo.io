// Returns the description set for the task.

export const getDescription = () => {
  const descriptionNode = document.getElementsByClassName(
    "form__input-task-description"
  )[0];
  const description = descriptionNode.value;
  return description;
};
