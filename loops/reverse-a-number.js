//Reverse a number using while
const rl = require("readline-sync");
let num = Number(rl.question("Enter a number: "));
if(isNaN(num) || num<0 || !Number.isInteger(num)){
  console.log("Enter a valid number");
  process.exit(1);
}
let rev = 0;
while(num>0){
  let digit = num%10;
  rev = (rev*10) + digit;
  num = Math.floor(num/10);
}
console.log(`The reversed number is: ${rev}`);