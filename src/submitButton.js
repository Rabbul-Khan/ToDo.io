import { taskAdd } from "./taskAdd";
import { toggleModal } from "./toggleModal";
import { getDate } from "./getDate";
import { getPriority } from "./getPriority";

export const submit = () => {
  const submitButton = document.getElementsByClassName("submit-btn")[0];
  submitButton.addEventListener("click", () => {
    let taskName = document.getElementById("taskName").value;
    let dueDate = getDate();
    let priority = getPriority();
    taskAdd(taskName, dueDate, priority);
    toggleModal();
  });
};
