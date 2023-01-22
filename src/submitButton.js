// Once the submit button is clicked, the new task is created and the form modal is closed.

import { getTaskName } from "./getTaskName";
import { getDescription } from "./getDescription";
import { getDueDate } from "./getDueDate";
import { getPriority } from "./getPriority";
import { addTask } from "./addTask";
import { toggleModal } from "./toggleModal";
import { deleteTaskButton } from "./deleteTaskButton";

export const submitButton = () => {
  const submitButton = document.getElementsByClassName("modal__btn-submit")[0];
  submitButton.addEventListener("click", () => {
    const taskName = getTaskName();
    const description = getDescription();
    const dueDate = getDueDate();
    const priority = getPriority();
    addTask(taskName, description, dueDate, priority);

    // Add event listener to the delete button.
    deleteTaskButton();

    toggleModal();

    // Resets the previous inputs to the form. If the reset function is not used, then the previous task name, description etc. remain in the input fields when a new form is opened.
    const formNode = document.getElementsByClassName("modal__add-task-form")[0];
    formNode.reset();
  });
};
