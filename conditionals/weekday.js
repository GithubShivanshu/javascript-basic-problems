//determining day of the week using switch case
const readline = require("readline-sync");
const day = Number(readline.question("Enter the day number from (1-7): "));

if(isNaN(day) || day<1 || day>7){
  console.log("Enter a valid number between 1 and 7: ");
  return;
}

switch(day){
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
    default:
      console.log("Enter a valid number between (1 to 7): ");
}