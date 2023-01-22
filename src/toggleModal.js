//Makes the modal visible and hides the add task button and vice versa

export const toggleModal = (className) => {
  const modalNode = document.getElementsByClassName(className)[0];
  let btn;

  if (className === "sidebar__modal") {
    btn = document.getElementsByClassName("add-project-btn")[0];
  } else if (className === "main-container__modal") {
    btn = document.getElementsByClassName("add-task-btn")[0];
  }

  if (modalNode.style.display === "block") {
    modalNode.style.display = "none";
    btn.style.display = "flex";
  } else {
    modalNode.style.display = "block";
    btn.style.display = "none";
  }
};
