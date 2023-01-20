import { taskAdd } from "./taskAdd";
import { toggleModal } from "./toggleModal";
import { getDate } from "./getDate";
import { getPriority } from "./getPriority";
import { getDescription } from "./getDescription";

export const submit = () => {
  const submitButton = document.getElementsByClassName("modal__btn-submit")[0];
  submitButton.addEventListener("click", () => {
    let taskName = document.getElementsByClassName("form__input-task-name")[0]
      .value;
    let dueDate = getDate();
    let priority = getPriority();
    let description = getDescription();
    taskAdd(taskName, description, dueDate, priority);
    toggleModal();
    let formNode = document.getElementsByClassName("modal__add-task-form")[0];
    formNode.reset();
  });
};
