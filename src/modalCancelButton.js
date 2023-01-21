// Clicking the cancel button on the modal closes the modal.

import { toggleModal } from "./toggleModal";

export const modalCancelButton = () => {
  const modalCancelButtonNode =
    document.getElementsByClassName("modal__btn-cancel")[0];
  modalCancelButtonNode.addEventListener("click", () => {
    toggleModal();
  });
};
