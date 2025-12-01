//Factorial of a number
const a = require("readline-sync");
const num = Number(a.question("Enter a whole number: "));
if(isNaN(num) || num<0 || !Number.isInteger(num)){
  console.log("Enter a valid whole number");
  return;
}
  let factorial = 1;
  for(let i=1; i<=num; i++){
    factorial *= i;
  }
  console.log(`Factorial of ${num} is ${factorial}`);