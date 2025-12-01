//Finding sum of first n natural number
const rl = require("readline-sync");
const num = Number(rl.question("Enter the number: "));
if(isNaN(num) || num<=0 || !Number.isInteger(num)){
  console.log("Enter a valid natural number");
  return;
}
let sum = 0;
for(let i=1; i<=num; i++){
  sum += i;
}
console.log(`The sum of first ${num} natural number is: ${sum}`);