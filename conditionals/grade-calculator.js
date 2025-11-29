// calculate grade based on score


const readline = require("readline-sync");

const marks = Number(readline.question("Enter student's marks (0-100): "));

if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid Input");
} 
else if (marks >= 90) {
  console.log("Grade: A");
} 
else if (marks >= 80) {
  console.log("Grade: B");
} 
else if (marks >= 70) {
  console.log("Grade: C");
} 
else if (marks >= 60) {
  console.log("Grade: D");
} 
else {
  console.log("Grade: F");
}