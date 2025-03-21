//// UI Design ////
import { operate } from './script.js';

document.querySelector("footer").append(`© James Johns ` + `${new Date().getFullYear()}`)

// define data for calc layout
const calculatorButtons = [
    // Row 1
    [
        { id: "clear", text: "C", class: "specialOperator" },
        { id: "negative", text: "+/-", class: "specialOperator" },
        { id: "percentage", text: "%", class: "specialOperator"},
        { id: "divide", text: "÷", class: "operator"}
    ],
    // Row 2
    [
        { id: "seven", text: "7", class: "number"},
        { id: "eight", text: "8", class: "number"},
        { id: "nine", text: "9", class: "number"},
        {id: "multiply", text: "x", class: "operator"},
    ],
    // Row 3
    [
        { id: "four", text: "4", class: "number" },
        { id: "five", text: "5", class: "number" },
        { id: "six", text: "6", class: "number"},
        { id: "minus", text: "-", class: "operator"}
    ],
    // Row 4
    [
        { id: "one", text: "1", class: "number"},
        { id: "two", text: "2", class: "number"},
        { id: "three", text: "3", class: "number"},
        { id: "plus", text: "+", class: "operator"}
    ],
    // Row 5
    [
        { id: "zero", text: "0" , class: "number"},
        { id: "decimal", text: ".", class: "specialOperator" },
        { id: "equals", text: "=", class: "specialOperator" }
    ]
];

function createButtons() {
    const buttonsContainer = document.querySelector("#buttonsContainer");

    calculatorButtons.forEach(row => {
        const buttonRow = document.createElement("div");
        buttonRow.setAttribute("class", "buttonRow");

        row.forEach(button => {
            const buttonElement = document.createElement("button");
            buttonElement.setAttribute(`id`, `${button.id}` + `Button`)
            buttonElement.setAttribute(`class`, `${button.class}`)
            buttonElement.textContent = button.text;
            buttonRow.appendChild(buttonElement);
        })
        buttonsContainer.appendChild(buttonRow)
    })
}
createButtons();


function createDisplay() {
  const displayField = document.createElement("input");
  displayField.setAttribute("id", "displayField");
  displayField.readOnly = true;
  const memoryField = document.createElement("div");
  memoryField.setAttribute("id", "memoryField");
  const displayContainer = document.querySelector("#displayContainer")
  displayContainer.appendChild(memoryField)
  displayContainer.appendChild(displayField)
}
createDisplay()

//// UI & Button Linkage ////

let displayValue = "";
let operatorValue = "";
let firstOperand = "";
let secondOperand = "";
let executeOperation = false

//TODO: Add way to change to true if equals clicked
let decimalPresent = false;

const buttonContainer = document.querySelector("#buttonsContainer")

// Reset executeOperation when a new number is clicked after a calculation
buttonContainer.addEventListener("click", (event) => {
  if (executeOperation && event.target.className === "number") {
    executeOperation = false;
    displayValue = "";  // Clear display for new number
  }
});
console.log("OPERATORvALUE: " + operatorValue)
buttonContainer.addEventListener("click", (event) => {
  if (operatorValue === "") {
    firstOperand = buttonListener(event)
    console.log("firstOperand: " + firstOperand) //TODO: Remove when no longer needed.
  }
  else if (executeOperation === false) {
      secondOperand = buttonListener(event);
      console.log(("secondOperand: ") + secondOperand) //TODO: Remove
  }
})
//if operator pressed, operator ID != specialetc.
    //perform the calculations
    //update display with answer
    //set operands and operator to null
    //change showDisplay function to ensure displayValue is changed back to the operands


//new function
let buttonListener = function(event) {
  // debugger;
  if (event.target.className === "number") {
    if (displayValue === "0") {
      displayValue = event.target.innerText
    }
    else displayValue = displayValue + event.target.innerText
    console.log("Display Value: " + displayValue) //TODO: remove when no longer needed
    updateDisplayValue()
    return displayValue
  }
  else if (event.target.className === "operator") {
    const storedOperand = displayValue
    updateMemoryField();
    displayValue = ""
    operatorValue = event.target.innerText
    console.log("Operator Value: " + operatorValue) //TODO: remove when no longer needed
    return storedOperand
  }
  else if (event.target.id === "decimalButton") {
      if (decimalPresent === false) {
      displayValue = displayValue + ".";
      updateDisplayValue();
      decimalPresent = true
      } else return console.log("Error: Only one decimal allowed!")
  }
  else if (event.target.id === "clearButton") {
  displayValue = "";
  operatorValue = "";
  firstOperand = "";
  secondOperand = "";
  decimalPresent = false
  updateMemoryField();
  updateDisplayValue();
  console.log("Display Value: " + displayValue) //TODO: remove
  } else if (event.target.id === "equalsButton") {
    updateMemoryField();
    let a = parseInt(firstOperand)
    let b = parseInt(secondOperand)

    switch(operatorValue) {
      case "+": operatorValue = "plus";
        break;
      case "-": operatorValue = "minus";
        break;
      case "x": operatorValue = "multiply";
        break;
      case "÷": operatorValue = "divide";
        break;
    }
    displayValue = operate(a, b, operatorValue);
    firstOperand = displayValue;
    secondOperand = "";
    operatorValue = "";
    decimalPresent = false;
    updateDisplayValue();
    executeOperation = true;
  }
  else if (event.target.className === "specialOperator") {
  console.log("Error: specialOperator Selected");
  alert("Sorry! This feature isn't yet ready!") //TODO: remove when no longer needed
  }
  return displayValue
}

//create function that populates the display when digit selected - store in variable
function updateMemoryField() {
  const memoryField = document.getElementById("memoryField")
  memoryField.textContent = firstOperand + " " + operatorValue + " " + secondOperand
}

function updateDisplayValue() {
  const temp = document.getElementById("displayField")
  temp.setAttribute(`value`,`${displayValue}`)
  console.log("Temp Value: " + temp.value)//TODO: remove when no longer needed
  return displayValue
}

// Add effect for button press
//Create function that stores operator
//Create function that stores second digit????
//create function equals that activates for all operations, but with those other than `=`, proceeds with that operation.
// displayValue will than show answer
