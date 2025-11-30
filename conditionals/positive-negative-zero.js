//check if an entered number is positive, negative or zero

const readline = require("readline-sync");
const num = Number(readline.question("Enter any number: "));

if(isNaN(num)){
  console.log("Enter a valid number");
  return;
}
if(num>0){
  console.log(`${num} is a positive number`);
}
else if(num<0){
  console.log(`${num} is a negative number`);
}
else{
  console.log("The number is zero");
}