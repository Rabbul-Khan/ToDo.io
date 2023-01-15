import { taskAdd } from "./taskAdd";
import { toggleModal } from "./toggleModal";

export const submit = () => {
  const submitButton = document.getElementsByClassName("submit-btn")[0];
  submitButton.addEventListener("click", () => {
    let taskName = document.getElementById("taskName").value;
    taskAdd(taskName);
    toggleModal();
  });
};
