/*/ Leap Year Check*/

function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4
    // but not divisible by 100, unless it is also divisible by 400.
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
const readline = require("readline-sync");

const year = Number(readline.question("Enter a year: "));

if (isNaN(year)) {
  console.log("Invalid Input");
} else {
  if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}