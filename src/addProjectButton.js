import { toggleModal } from "./toggleModal";

export const addProjectButton = () => {
  const addProjectButtonNode =
    document.getElementsByClassName("add-project-btn")[0];

  addProjectButtonNode.addEventListener("click", () => {
    toggleModal("sidebar__modal");
  });
};
