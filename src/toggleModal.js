//Makes the modal visible and hides the add task button and vice versa

export const toggleModal = (className) => {
  const modalNode = document.getElementsByClassName(className);
  let btn;

  for (let i = 0; i < modalNode.length; i++) {
    if (className === "sidebar__modal") {
      btn = document.getElementsByClassName("add-project-btn")[i];
    } else if (className === "main-container__modal") {
      btn = document.getElementsByClassName("add-task-btn")[i];
    }

    if (modalNode[i].style.display === "block") {
      modalNode[i].style.display = "none";
      btn.style.display = "flex";
    } else {
      modalNode[i].style.display = "block";
      btn.style.display = "none";
    }
  }
};
