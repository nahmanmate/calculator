/////// Temp
// let a = parseInt(firstOperand)
// let b = parseInt(secondOperand)

// switch(operatorValue) {
// case "+": operator = "plus";
// break;
// case "-": operator = "minus";
// break;
// case "x": operator = "multiply";
// break;
// case "÷": operator = "divide";
// break;
// }



//// Calculator Math ////
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

// // Create Operate function

const operate = function (a, b, operator) {
    let answer = 0
    switch (operator) {
    case "plus":
        answer = addition(a, b);
      break;
    case "minus":
        answer = subtraction(a, b);
    subtraction(a, b);
      break;
    case "multiply":
        answer = multiplication(a, b);
      break;
    case "divide":
      answer = division(a, b);
      break;
    default: answer = undefined
  }
  return answer
};

operate(a, b, operator); //TODO - remove or assign appropriately.


// Export functions for testing
// export { addition, subtraction, multiplication, division, operate };
