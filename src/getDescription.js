export const getDescription = () => {
  let descriptionNode = document.getElementById("taskDescription");
  let description = descriptionNode.value;
  return description;
};
