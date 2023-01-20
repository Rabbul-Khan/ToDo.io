export const getDescription = () => {
  let descriptionNode = document.getElementsByClassName(
    "form__input-task-description"
  )[0];
  let description = descriptionNode.value;
  return description;
};
