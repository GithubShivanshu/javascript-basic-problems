//Calculator using switch case
const readline = require("readline-sync");
const a = Number(readline.question("Enter first number: "));
const operator = readline.question("Enter the operation (+, -, *, /): ");
const b = Number(readline.question("Enter second number: "));

if(isNaN(a) || isNaN(b) || !/^[+\-*/]$/.test(operator)){
  console.log("Enter valid values");
  return;
}
switch(operator){
  case '+':
    console.log(`Result: ${a+b}`);
    break;
    case '-':
      console.log(`Result: ${a-b}`);
      break;
      case '*':
        console.log(`Result: ${a*b}`);
        break;
        case '/':
          if(b===0){
            console.log("Division by zero is not allowed");
          }
          else{
          console.log(`Result: ${a/b}`);
          }
          break;
          default:
            console.log("Enter valid operation");     
}