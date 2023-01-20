import { dateToString } from "./dateToString.js";

export const getDate = () => {
  let dueDateNode = document.getElementsByClassName("form__input-due-date")[0];
  let dueDate = new Date(dueDateNode.value);
  return dateToString(dueDate);
};
