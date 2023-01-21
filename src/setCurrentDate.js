//Sets the current date on the homepage.

import { dateToString } from "./dateToString";

export const setCurrentDate = () => {
  const currentDate = new Date();
  const currentDateString = dateToString(currentDate);
  const currentDateNode = document.getElementsByClassName(
    "date-container__current-date"
  )[0];
  currentDateNode.textContent = currentDateString;
};
