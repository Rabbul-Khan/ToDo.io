import { dateToString } from "./dateToString.js";

export const getDate = () => {
  let dueDateNode = document.getElementById("due-date");
  let dueDate = new Date(dueDateNode.value);
  return dateToString(dueDate);
};
