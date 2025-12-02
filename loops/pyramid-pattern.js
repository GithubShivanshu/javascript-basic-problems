//Printing pyramid pattern of height n using nested loops
const rl = require("readline-sync");
const n = Number(rl.question("Enter the height of pyramid: "));

if(Number.isNaN(n) || n<1 || !Number.isInteger(n)){
  console.log("Enter a valid positive integer");
  process.exit(1);
}

for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i; j++){
    process.stdout.write(" "); //console.log() adds a new line after each call
  }
  for(let k=1; k<=(2*i-1); k++){
    process.stdout.write("*");
  }
  console.log();
}