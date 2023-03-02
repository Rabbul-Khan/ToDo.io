import { toggleModal } from "./toggleModal";

export const navBarAddTaskButton = () => {
  const navBarAddTaskBtnNode = document.getElementsByClassName(
    "nav__icons-add icon material-icons"
  )[0];

  navBarAddTaskBtnNode.addEventListener("click", () => {
    toggleModal("main-container__modal");
  });
};
