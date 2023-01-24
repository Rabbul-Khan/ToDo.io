// Returns the priority set for the task.

export const getPriority = (priorityList) => {
  for (let i = 0; i < priorityList.length; i++) {
    if (priorityList[i].checked) {
      return priorityList[i].getAttribute("label");
    }
  }
};
