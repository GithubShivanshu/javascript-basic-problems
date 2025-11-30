//finding maximum of three number using nested if statements.

const readline = require("readline-sync");
const a = Number(readline.question("Enter first number:"));
const b = Number(readline.question("Enter second number:"));
const c = Number(readline.question("Enter third number:"));

if(a>=b){
  if(a>=c){
    console.log(`Biggest number is: ${a}`);
  }
  else{
    console.log(`Biggest number is: ${c}`);
  }
}
else{
  if(b>=c){
    console.log(`Biggest number is ${b}`);
  }
  else{
    console.log(`Biggest number is ${c}`);
  }
}