//Sets the current date on all the project pages.

import { dateToString } from "./dateToString";

export const setCurrentDate = () => {
  const currentDate = new Date();
  const currentDateString = dateToString(currentDate);
  const currentDateNode = document.getElementsByClassName(
    "date-container__current-date"
  );

  for (let i = 0; i < currentDateNode.length; i++) {
    currentDateNode[i].textContent = currentDateString;
  }
};
