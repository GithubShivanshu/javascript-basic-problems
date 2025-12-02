//check if a number is prime or not
const rl = require("readline-sync");
const num = Number(rl.question("Enter a number: "));
if(Number.isNaN(num) || !Number.isInteger(num) || num<0){
  console.log("Enter a valid positive integer");
  process.exit(1);
}
if(num===0 || num===1){
  console.log(`${num} is not a prime number`);
  process.exit(0);
}
//prime number are those numbers which are not divisible by any other number and have exactly 2 factors, themselves and 1
//optimization: checking till sqrt(num); for num=2 ,loop will never run as condition fails at start so 2 is declared prime
for(let i=2; i*i<=num; i++){ 
  if(num%i===0){
    console.log(`${num} is not a prime number`);
    process.exit(0);
  }
}
console.log(`${num} is a prime number`);
