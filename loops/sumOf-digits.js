//Finding sum of digits of a given number
const rl = require("readline-sync");
let num = Number(rl.question("Enter a number: "));
const temp = num;
if(Number.isNaN(num) || num<0 || !Number.isInteger(num)){
  console.log("Enter a valid number");
  process.exit(1);
}

if(num===0){
  console.log("Sum of digits of 0 is 0");
  process.exit(0);
}
let sum = 0;
while(num>0){
  let digit = num%10;
  sum += digit;
  num = Math.floor(num / 10);
}
console.log(`The sum of digits of ${temp} is ${sum}`);