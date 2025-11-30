const readline = require("readline-sync");
const age = Number(readline.question("Enter your age: "));

if(isNaN(age) || age<=0){
  console.log("Enter valid age");
  return;
}
age>=18 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote");