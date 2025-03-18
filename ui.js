//// UI Design ////

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
  const displayContainer = document.querySelector("#displayContainer")
  displayContainer.appendChild(displayField)
}
createDisplay()

//// UI & Button Linkage ////

let displayValue = "";
let operatorValue = "";
let firstOperand = "";
let secondOperand = ""; //TODO: change to NULL
let decimalPresent = false;
//add event listeners - event delegation


const buttonContainer = document.querySelector("#buttonsContainer")
buttonContainer.addEventListener("click", (event) => {
  //////this can be reduced a lot now
  if (secondOperand != null || secondOperand != 0) {
    sameNumber = true;
    secondOperand = buttonListener();
    console.log(("secondOperand: ") + secondOperand)
  } 
  else if (secondOperand = null || firstOperand === 0) {
    sameNumber = false;
    secondOperand = buttonListener();
  }
  else if (firstOperand != null || firstOperand != 0) {
    sameNumber = true
    firstOperand = buttonListener()
    console.log("firstOperand: " + firstOperand) //TODO: Remove when no longer needed.
  } 
  else if (firstOperand = null || firstOperand === 0) {
    sameNumber = false;
    firstOperand = buttonListener();
    console.log("firstOperand: " + firstOperand) //TODO: Remove when no longer needed.
  }
//if operator pressed, operator ID != specialetc.
    //perform the calculations
    //update display with answer
    //set operands and operator to null
    //change showDisplay function to ensure displayValue is changed back to the operands 
})

//new function
let buttonListener = function() {
  // debugger;
  if (event.target.className === "number") {
    displayValue = displayValue + event.target.innerText
    console.log("Display Value: " + displayValue) //TODO: remove when no longer needed
    updateDisplayValue()
    return displayValue
  } else if (event.target.className === "operator") {
  operatorValue = event.target.innerText
  console.log("Operator Value: " + operatorValue) //TODO: remove when no longer needed
  } else if (event.target.id === "decimalButton") {
    if (decimalPresent === false) {
    displayValue = displayValue + ".";
    updateDisplayValue();
    decimalPresent = true
    } else return console.log("Error: Only one decimal allowed!")
  }
  else if (event.target.id === "clearButton") {
  displayValue = "";
  firstOperand = "";
  secondOperand = "";
  decimalPresent = false
  updateDisplayValue()
  console.log("Display Value: " + displayValue)
  } else if (event.target.className === "specialOperator") {
  console.log("Error: specialOperator Selected");
  alert("Sorry! This feature isn't yet ready!") //TODO: remove when no longer needed
  }
  return displayValue
}

//create function that populates the display when digit selected - store in variable

function updateDisplayValue() {
  const temp = document.getElementById("displayField")
  if (sameNumber = false) {
    temp.setAttribute(`value`,`${displayValue}`)
  }
  //Concatenate where existing digit is
  else {
    temp.setAttribute(`value`,`${displayValue}`)
  }
  temp.setAttribute(`value`,`${displayValue}`)
  console.log(temp.value)//TODO: remove when no longer needed
  return displayValue
}
updateDisplayValue()


//Create function that stores operator
//Create function that stores second digit????
//create function equals that activates for all operations, but with those other than `=`, proceeds with that operation.
// displayValue will than show answer
