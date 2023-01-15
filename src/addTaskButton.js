import { toggleModal } from "./toggleModal";

export const addTaskButton = () => {
  const addTaskBtnNode = document.getElementsByClassName("add-task-btn")[0];

  addTaskBtnNode.addEventListener("click", () => {
    toggleModal();
    addTaskContainer.style.display = "none";
  });
};
