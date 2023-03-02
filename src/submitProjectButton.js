import { addProject } from "./addProject";
import { toggleModal } from "./toggleModal";
import { getProjectName } from "./getProjectName";
import { deleteProjectButton } from "./deleteProjectButton";

export const submitProjectButton = () => {
  const submitProjectButton = document.getElementsByClassName(
    "add-project-modal__btn-submit"
  )[0];
  submitProjectButton.addEventListener("click", () => {
    const projectName = getProjectName();
    const projectId =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
    addProject(projectName, projectId);

    deleteProjectButton(projectId);

    toggleModal("sidebar__modal");

    const formNode = document.getElementsByClassName(
      "modal__add-project-form"
    )[0];
    formNode.reset();
  });
};
