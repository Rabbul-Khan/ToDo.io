export const toggleModal = () => {
  let modalNode = document.getElementsByClassName("modal")[0];
  let addTaskBtn = document.getElementsByClassName("add-task-btn")[0];

  if (modalNode.style.display === "block") {
    modalNode.style.display = "none";
    addTaskBtn.style.display = "flex";
  } else {
    modalNode.style.display = "block";
    addTaskBtn.style.display = "none";
  }
};
