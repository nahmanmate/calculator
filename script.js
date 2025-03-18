// UI

// define data for calc layout
const calculatorButtons = [
    // Row 1
    [
        { id: "clear", text: "C" },
        { id: "negative", text: "+/-" },
        { id: "percentage", text: "%"},
        { id: "divide", text: "÷"}
    ],
    // Row 2
    [
        { id: "seven", text: "7"},
        { id: "eight", text: "8"},
        { id: "nine", text: "9"},
        {id: "multiply", text: "x"},
    ],
    // Row 3
    [
        { id: "four", text: "4" },
        { id: "five", text: "5" },
        { id: "six", text: "6"},
        { id: "minus", text: "-"}
    ],
    // Row 4
    [
        { id: "one", text: "1" },
        { id: "two", text: "2" },
        { id: "three", text: "3"},
        { id: "plus", text: "+"}
    ],
    // Row 5
    [
        { id: "zero", text: "0" },
        { id: "decimal", text: "." },
        { id: "equals", text: "="}
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
            buttonElement.textContent = button.text;
            buttonRow.appendChild(buttonElement);
        })
        buttonsContainer.appendChild(buttonRow)
    })
}
createButtons();
function createDisplay() {
  const displayField = document.createElement("input");
  displayField.setAttribute("class", "displayField");
  displayField.readOnly = true;
  const displayContainer = document.querySelector("#displayContainer")
  displayContainer.appendChild(displayField)
  console.log("Display Field" + displayField)
  console.log("Display Container" + displayContainer)
}
createDisplay()


//create display field 
// const calcUI = document.querySelector("#calculator");
// create four rows of


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
