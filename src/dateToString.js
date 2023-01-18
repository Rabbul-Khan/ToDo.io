export const dateToString = (dueDate) => {
  let dueDateString = dueDate.toString();
  let dueDateArray = dueDateString.split(" ");
  return dueDateArray[1] + " " + dueDateArray[2] + " " + dueDateArray[3];
};
