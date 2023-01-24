//Clicking the add task button will hide the add task button and make the modal visible.

import { toggleModal } from "./toggleModal";

export const addTaskButton = () => {
  const addTaskBtnNode = document.getElementsByClassName("add-task-btn");

  const lastAddTaskBtnNode = addTaskBtnNode[addTaskBtnNode.length - 1];

  lastAddTaskBtnNode.addEventListener("click", () => {
    toggleModal("main-container__modal");
  });

  // for (let i = 0; i < addTaskBtnNode.length; i++) {
  //   addTaskBtnNode[i].addEventListener("click", () => {
  //     toggleModal("main-container__modal");
  //   });
  // }
};
