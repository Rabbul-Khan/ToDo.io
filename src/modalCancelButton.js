// Clicking the cancel button on the modal closes the modal.

import { toggleModal } from "./toggleModal";

export const modalCancelButton = (className) => {
  let modalCancelButtonNode;
  let classNameToggleModal;

  if (className === "add-project-modal__btn-cancel") {
    modalCancelButtonNode = document.getElementsByClassName(
      "add-project-modal__btn-cancel"
    )[0];
    classNameToggleModal = "sidebar__modal";
  } else if (className === "add-task-modal__btn-cancel") {
    modalCancelButtonNode = document.getElementsByClassName(
      "add-task-modal__btn-cancel"
    )[0];
    classNameToggleModal = "main-container__modal";
  }
  modalCancelButtonNode.addEventListener("click", () => {
    toggleModal(classNameToggleModal);
  });
};
