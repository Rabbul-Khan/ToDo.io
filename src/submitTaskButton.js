// Once the submit button is clicked, the new task is created and the form modal is closed.
import { getDueDate } from "./getDueDate";
import { getPriority } from "./getPriority";
import { addTask } from "./addTask";
import { toggleModal } from "./toggleModal";
import { deleteTaskButton } from "./deleteTaskButton";

export const submitTaskButton = () => {
  const submitButton = document.getElementsByClassName(
    "add-task-modal__btn-submit"
  );

  const latestIndex = submitButton.length - 1;

  const lastSubmitButton = submitButton[latestIndex];

  lastSubmitButton.addEventListener("click", () => {
    const modalContentNode = lastSubmitButton.closest(".modal__content");
    const taskName = modalContentNode.querySelector(
      ".form__input-task-name"
    ).value;
    const description = modalContentNode.querySelector(
      ".form__input-task-description"
    ).value;

    const dueDateNode = modalContentNode.getElementsByClassName(
      "form__input-due-date"
    )[0];
    const dueDate = getDueDate(dueDateNode);

    const priorityList = modalContentNode.getElementsByClassName(
      "form__input-priority"
    );
    const priority = getPriority(priorityList);

    addTask(taskName, description, dueDate, priority);

    // Add event listener to the delete button.
    deleteTaskButton();

    toggleModal("main-container__modal");

    // Resets the previous inputs to the form. If the reset function is not used, then the previous task name, description etc. remain in the input fields when a new form is opened.
    const formNode = document.getElementsByClassName("modal__add-task-form")[
      latestIndex
    ];
    formNode.reset();
  });
};
