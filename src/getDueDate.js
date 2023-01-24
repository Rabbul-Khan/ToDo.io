// Returns the due date set for the task.

import { dateToString } from "./dateToString.js";

export const getDueDate = (dueDateNode) => {
  const dueDate = new Date(dueDateNode.value);
  return dateToString(dueDate);
};
