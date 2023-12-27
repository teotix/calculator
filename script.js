const buttons = document.querySelectorAll("button");
const calcNumber = document.querySelector(".numbers-container");
const calcSign = document.querySelector(".sign");
const ce = document.querySelector("#CE");

function add(a, b) {
  if (String(a + b).split(".")[1]) return (a + b).toFixed(2);
  else return a + b;
}

function substract(a, b) {
  if (String(a - b).split(".")[1]) return (a - b).toFixed(2);
  else return a - b;
}

function multiply(a, b) {
  if (String(a * b).split(".")[1]) return (a * b).toFixed(2);
  else return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Nah";
  } else if (String(a / b).split(".")[1]) return (a / b).toFixed(2);
  else return a / b;
}

function modulo(a, b) {
  if (String(a % b).split(".")[1]) return (a % b).toFixed(2);
  else return a % b;
}

function root(a) {
  if (String(Math.sqrt(a)).split(".")[1]) return Math.sqrt(a).toFixed(2);
  else return Math.sqrt(a);
}

function power(a, b) {
  if (String(Math.pow(a, b)).split(".")[1]) return Math.pow(a, b).toFixed(2);
  else return Math.pow(a, b);
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "x":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    case "%":
      return modulo(a, b);
      break;
    case "^":
      return power(a, b);
      break;
  }
}

function CE() {
  firstNum = "";
  operator = "";
  secondNum = "";
  calcNumber.innerText = "";
  calcSign.innerText = "";
  result = "";
}

ce.addEventListener("click", CE);

let firstNum = "";
let operator = "";
let secondNum = "";

buttons.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (isNaN(e.target.innerText)) {
      if (!firstNum) calcNumber.innerText = "";
      else if (firstNum && !secondNum) {
        if (firstNum == "Nah") {
          calcNumber.innerText = firstNum;
          CE();
        } else if (e.target.innerText == "." && !firstNum.includes(".")) {
          firstNum += e.target.innerText;
          calcNumber.innerText = firstNum;
        } else if (e.target.innerText == "+/-") {
          firstNum = firstNum *= -1;
          firstNum = String(firstNum);
          calcNumber.innerText = firstNum;
        } else if (
          e.target.innerText != "=" &&
          e.target.innerText != "←" &&
          e.target.innerText != "." &&
          e.target.innerText != "+/-"
        ) {
          operator = e.target.innerText;
          calcSign.innerText = operator;
        } else if (e.target.innerText == "←") {
          firstNum = firstNum.slice(0, -1);
          calcNumber.innerText = firstNum;
        }
      } else if (firstNum && operator) {
        if (e.target.innerText == "." && !secondNum.includes(".")) {
          secondNum += e.target.innerText;
          calcNumber.innerText = secondNum;
        } else if (!secondNum) calcNumber.innerText = "0";
        else if (e.target.innerText == "+/-") {
          secondNum = secondNum *= -1;
          secondNum = String(secondNum);
          calcNumber.innerText = secondNum;
        } else if (e.target.innerText == "←") {
          secondNum = secondNum.slice(0, -1);
          calcNumber.innerText = secondNum;
        } else {
          firstNum = String(operate(+firstNum, +secondNum, calcSign.innerText));
          secondNum = "";
          e.target.innerText == "="
            ? (calcSign.innerText = "")
            : (calcSign.innerText = e.target.innerText);
          calcNumber.innerText = firstNum;
        }
      }
    } else if (!isNaN(e.target.innerText)) {
      if ((operator && !calcSign.innerText) || firstNum == "Nah") {
        CE();
        firstNum = e.target.innerText;
        calcNumber.innerText = firstNum;
      } else {
        if (!operator) {
          firstNum += e.target.innerText;
          calcNumber.innerText = firstNum;
        } else {
          secondNum += e.target.innerText;
          calcNumber.innerText = secondNum;
        }
      }
    }
  });
});
