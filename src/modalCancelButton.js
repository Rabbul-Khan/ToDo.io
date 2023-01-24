// Clicking the cancel button on the modal closes the modal.

import { toggleModal } from "./toggleModal";

export const modalCancelButton = (className) => {
  let modalCancelButtonNode;
  let classNameToggleModal;

  if (className === "add-project-modal__btn-cancel") {
    modalCancelButtonNode = document.getElementsByClassName(
      "add-project-modal__btn-cancel"
    );
    classNameToggleModal = "sidebar__modal";
  } else if (className === "add-task-modal__btn-cancel") {
    modalCancelButtonNode = document.getElementsByClassName(
      "add-task-modal__btn-cancel"
    );
    classNameToggleModal = "main-container__modal";
  }

  for (let i = 0; i < modalCancelButtonNode.length; i++) {
    modalCancelButtonNode[i].addEventListener("click", () => {
      toggleModal(classNameToggleModal);
    });
  }
};
