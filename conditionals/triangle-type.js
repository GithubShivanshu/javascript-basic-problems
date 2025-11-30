//chech type of triangle according to its length
const readline = require("readline-sync");
const a = Number(readline.question("Enter length of 1st side: "));
const b = Number(readline.question("Enter length of 2nd side: "));
const c = Number(readline.question("Enter length of 3rd side: "));

if(isNaN(a) || isNaN(b) || isNaN(c) || a<=0 || b<=0 || c<=0){
  console.log("Enter a valid lengths of triangle");
  return;
}
if(a+b<=c || a+c<=b || b+c<=a){
  console.log("These sides cannot form a triangle");
  return;
}
if(a===b && b===c){
  console.log("It is a Equilateral triangle");
}
else if(a===b || a===c || b===c){
  console.log("It is an Isosceles triangle");
}
else{
  console.log("It is a Scalene triangle");
}

