//Makes the modal visible and hides the add task button and vice versa

export const toggleModal = () => {
  const modalNode = document.getElementsByClassName("modal")[0];
  const addTaskBtn = document.getElementsByClassName("add-task-btn")[0];

  if (modalNode.style.display === "block") {
    modalNode.style.display = "none";
    addTaskBtn.style.display = "flex";
  } else {
    modalNode.style.display = "block";
    addTaskBtn.style.display = "none";
  }
};
