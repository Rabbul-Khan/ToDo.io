// Returns the due date set for the task.

import { dateToString } from "./dateToString.js";

export const getDueDate = () => {
  const dueDateNode = document.getElementsByClassName(
    "form__input-due-date"
  )[0];
  const dueDate = new Date(dueDateNode.value);
  return dateToString(dueDate);
};
