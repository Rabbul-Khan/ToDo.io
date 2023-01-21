// Converts the Date object to a string and outputs the date in the format: mmm/dd/yyyy.

export const dateToString = (date) => {
  let dateString = date.toString();
  let dateStringArray = dateString.split(" ");
  return (
    dateStringArray[1] + " " + dateStringArray[2] + " " + dateStringArray[3]
  );
};
