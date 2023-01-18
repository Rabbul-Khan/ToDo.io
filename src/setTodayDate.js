import { dateToString } from "./dateToString";

export const setTodayDate = () => {
  let today = new Date();
  let todayString = dateToString(today);
  let todayDateNode = document.getElementsByClassName("today-date")[0];
  todayDateNode.textContent = todayString;
};
