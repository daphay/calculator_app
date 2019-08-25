// store all selectors in a variable
const clearBtn = document.querySelector(".clear-key");
const deciBtn = document.querySelector(".deci-key");
const input = document.querySelector(".display-input");
const numBtn = document.querySelectorAll(".num-key");
const operatorBtn = document.querySelectorAll(".operator-key");

// create variables to handle calculation operation
let displayValue = "0";
let awaitingValue;
let evalStringArray = [];

//function that updates display value
const updateDisplay = e => {
  let numBtnText = e.target.innerText;
  if (displayValue === "0") {
    displayValue = "";
  }
  displayValue += numBtnText;
  input.value = displayValue;
};

//function to perform mathematical operations
const mathOperation = e => {
  let operatorBtnText = e.target.innerText;
  switch (operatorBtnText) {
    case "+":
      awaitingValue = displayValue;
      displayValue = "0";
      input.value = displayValue;
      evalStringArray.push(awaitingValue);
      evalStringArray.push("+");
      break;

    case "-":
      awaitingValue = displayValue;
      displayValue = "0";
      input.value = displayValue;
      evalStringArray.push(awaitingValue);
      evalStringArray.push("-");
      break;

    case "*":
      awaitingValue = displayValue;
      displayValue = "0";
      input.value = displayValue;
      evalStringArray.push(awaitingValue);
      evalStringArray.push("*");
      break;

    case "/":
      awaitingValue = displayValue;
      displayValue = "0";
      input.value = displayValue;
      evalStringArray.push(awaitingValue);
      evalStringArray.push("/");
      break;

    case "=":
      evalStringArray.push(displayValue);
      let calculation = eval(evalStringArray.join(" "));
      displayValue = calculation + "";
      input.value = displayValue;
      evalStringArray = [];
      break;

    default:
      break;
  }
};

//add Eventlisteners to number and operator buttons
numBtn.forEach(btn => {
  btn.addEventListener("click", updateDisplay);
});

operatorBtn.forEach(optrbtn => {
  optrbtn.addEventListener("click", mathOperation);
});

//function that clears the input field when the CLR button is clicked
const clearInput = () => {
  clearBtn.addEventListener("click", () => {
    displayValue = "0";
    evalStringArray = [];
    input.value = displayValue;
  });
};
clearInput();

//function that inserts decimal point to calculation
const addDecimal = () => {
  deciBtn.addEventListener("click", () => {
    if (!displayValue.includes(".")) {
      displayValue += ".";
    }
    input.value = displayValue;
  });
};
addDecimal();
