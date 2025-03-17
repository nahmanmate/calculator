// Create variables for operator and values
const a = 0;
const b = 0;
const operator = "plus";

//Create Add function

const addition = function (a, b) {
  return a + b;
};

// //Create Subtract function

const subtraction = function (a, b) {
  return a - b;
};

// // Create multiply function

const multiplication = function (a, b) {
  return a * b;
};

// // Create divide function

const division = function (a, b) {
  return b === 0 ? "Silly" : a / b;
};

console.log(division(6,3))
console.log(multiplication(2,3))
console.log(division(5,0))
console.log(subtraction(5,3))
console.log(addition(2,3))

// // Create Operate function

// const operate = function (a, b, operator) {
//     switch (operator) {
//     case "plus":
//       addition(a, b);
//       break;
//     case "minus":
//       subtraction(a, b);
//       break;
//     case "multiply":
//       multiplication(a, b);
//       break;
//     case "divide":
//       division(a, b);
//       break;
//   }
// };
operate(a, b, operator); //TODO - remove or assign appropriately.

// Export functions for testing
export { addition, subtraction, multiplication, division, operate };
