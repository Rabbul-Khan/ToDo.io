import { toggleModal } from "./toggleModal";
import { getProjectName } from "./getProjectName";

export const submitProjectButton = (onSubmit) => {
  const submitProjectButton = document.getElementsByClassName(
    "add-project-modal__btn-submit"
  )[0];
  submitProjectButton.addEventListener("click", () => {
    const projectName = getProjectName();

    if (typeof onSubmit === "function") {
      onSubmit(projectName);
    }

    toggleModal("sidebar__modal");

    const formNode = document.getElementsByClassName(
      "modal__add-project-form"
    )[0];
    formNode.reset();
  });
};
