import { taskAdd } from "./taskAdd.js";

export const formSubmit = () => {
  const submitButton = document.getElementsByClassName("submit-btn")[0];
  submitButton.addEventListener("click", () => {
    taskAdd("This is the first task");
  });
};
