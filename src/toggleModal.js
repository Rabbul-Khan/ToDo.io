export const toggleModal = () => {
  let modalNode = document.getElementsByClassName("modal")[0];
  const addTaskContainer =
    document.getElementsByClassName("add-task-container")[0];

  if (modalNode.style.display === "block") {
    modalNode.style.display = "none";
    addTaskContainer.style.display = "block";
  } else {
    modalNode.style.display = "block";
    addTaskContainer.style.display = "none";
  }
};
