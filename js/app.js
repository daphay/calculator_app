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
const updateDisplay = (e) => {
  let numBtnText = e.target.innerText;
  if (displayValue === "0") {
    displayValue = "";
  }
  displayValue += numBtnText;
  input.value = displayValue;
  console.log(numBtnText);
};

//add Eventlisteners to number and operator buttons
numBtn.forEach(btn => {
  btn.addEventListener("click", updateDisplay);
});

operatorBtn.forEach(optrbtn => {
  optrbtn.addEventListener("click", () => {
    window.alert("operator button clicked");
  });
});
