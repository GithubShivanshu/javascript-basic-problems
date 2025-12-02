//Printing first n terms of fibonacci series
const rl = require("readline-sync");
const num = Number(rl.question("Enter how many terms: "));
if(Number.isNaN(num) || !Number.isInteger(num) || num<1){
  console.log("Enter a valid positive integer");
  process.exit(1);
}
let a = 0, b=1;
console.log(a);
if(num>1) console.log(b);
for(let i=3; i<=num; i++){
  let next = a+b;
  console.log(next);
  a=b;
  b=next;
}