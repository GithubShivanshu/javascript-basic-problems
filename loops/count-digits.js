//Counting digits of a given number
const rl = require("readline-sync");
let num = Number(rl.question("Enter a number: "));
const temp = num;
if(Number.isNaN(num) || !Number.isInteger(num) || num<0){
  console.log("Enter a valid positive integer");
  process.exit(1);
}
if(num===0){
  console.log("Number of digit in 0 is 1");
  process.exit(0);
}
let count = 0;
while(num>0){
  num = Math.floor(num/10);
  count++;
}
console.log(`Number of digit in ${temp} is ${count}`);