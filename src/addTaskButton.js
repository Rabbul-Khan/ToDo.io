//Clicking the add task button will hide the add task button and make the modal visible.

import { toggleModal } from "./toggleModal";

export const addTaskButton = () => {
  const addTaskBtnNode = document.getElementsByClassName("add-task-btn")[0];
  addTaskBtnNode.addEventListener("click", () => {
    toggleModal();
  });
};
