function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return (a / b).toFixed(2);
}

function modulo(a, b) {
  return a % b;
}

function root(a) {
  return Math.sqrt(a).toFixed(2);
}

function power(a, b) {
  return Math.pow(a, b);
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    case "%":
      return modulo(a, b);
      break;
    case "root":
      return root(a);
      break;
    case "power":
      return power(a, b);
      break;
  }
}

let firstNum;
let operator = "";
let secondNum;

console.log(add(5, 12));
console.log(substract(5, 12));
console.log(multiply(5, 12));
console.log(divide(5, 12));
console.log(modulo(166, 14));
console.log(root(18));
console.log(power(29, 18));
