//Printing Multiplication table of a number entered

const readline = require("readline-sync");
const input = Number(readline.question("Enter a number: "));
if(isNaN(input)){
  console.log("Enter a valid number");
  return;
}
console.log(`Multiplication table of ${input} is:`);
for(let i=1; i<=10; i++){
  console.log(`${input} x ${i} = ${input*i}`);
}