//checking if a character is vowel or consonant
const readline = require("readline-sync");
const char = readline.question("Enter the single character: ").toLowerCase();

if(char.length !== 1 || !/[a-z]/ .test(char)){
  console.log("Enter a valid character");
  return;
}

if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
  console.log("It is a vowel");
}
else{
  console.log("It is a consonant");
}

//alternate way using includes method
// "aeiou".includes(char) ? console.log("Vowel") : console.log("Consonant");