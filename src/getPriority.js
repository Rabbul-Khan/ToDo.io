export const getPriority = () => {
  let priorities = document.querySelectorAll('input[name="priority"]');
  for (let i = 0; i < priorities.length; i++) {
    if (priorities[i].checked) {
      return priorities[i].getAttribute("id");
    }
  }
};
