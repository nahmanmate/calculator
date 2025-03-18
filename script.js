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

let displayValue = 0
let operatorValue = ""
//add event listeners - event delegation

const buttonContainer = document.querySelector("#buttonsContainer")
buttonContainer.addEventListener("click", (event) => {
  if (event.target.className === "number") {
    displayValue = event.target.innerText
    console.log("Display Value: " + displayValue)
    updateDisplayValue()
  } else if (event.target.className === "operator") {
    operatorValue = event.target.innerText
    console.log("Operator Value: " + operatorValue)
  } else if (event.target.className === "specialOperator") {
    console.log("Error: specialOperator Selected");
    alert("Sorry! This feature isn't yet ready!") //TODO: remove when no longer needed
  }
})


//create function that populates the display when digit selected - store in variable

function updateDisplayValue() {
  const temp = document.getElementById("displayField")
  temp.setAttribute(`value`,`${displayValue}`)
  console.log(temp.value)
}
updateDisplayValue()
//create clear function
//Create function that stores operator
//Create function that stores second digit????
//create function equals that activates for all operations, but with those other than `=`, proceeds with that operation.
// displayValue will than show answer

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

// operate(a, b, operator); //TODO - remove or assign appropriately.

// Export functions for testing
// export { addition, subtraction, multiplication, division, operate };
