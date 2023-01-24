import { addProject } from "./addProject";
import { toggleModal } from "./toggleModal";
import { getProjectName } from "./getProjectName";

export const submitProjectButton = () => {
  const submitProjectButton = document.getElementsByClassName(
    "add-project-modal__btn-submit"
  )[0];
  submitProjectButton.addEventListener("click", () => {
    const projectName = getProjectName();
    addProject(projectName);

    toggleModal("sidebar__modal");

    const formNode = document.getElementsByClassName(
      "modal__add-project-form"
    )[0];
    formNode.reset();
  });
};
