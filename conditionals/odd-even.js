// function to check if a number is odd or even
function isOddOrEven(number) {
  if (typeof number !== "number" || isNaN(number)){
    return "Invalid Input";
  }
    return number %2 === 0 ? "Even" : "Odd";
}

console.log(isOddOrEven("5.0"));
console.log(isOddOrEven("fg"));
console.log(isOddOrEven(4));
console.log(isOddOrEven(NaN));
console.log(isOddOrEven([]));