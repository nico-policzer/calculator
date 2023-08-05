function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

var firstNum;

var secondNum;

var operation;


function operate(operator, num1, num2) {
    let fn; // fn undefined if operator not in "+", "-", "*", "/"
    switch(operator) {
        case "+":
          fn = add;
          break;
        case "-":
          fn = subtract;
          break;
        case "*":
          fn = multiply;
          break;
        case "/":
          fn = divide;
          break;
    }
    return fn(num1, num2);
}
function setup() {
    let button_container = document.querySelector("#button-container");
    for (let i = 0; i < 10; i++) {
        const but = document.createElement("button");
        but.textContent = "" + i;
        but.id = "b" + i;
        but.classList.add("digit");
        button_container.appendChild(but);
    }
    const operations = ["+", "-", "*", "/"];
    for (let i = 0; i < operations.length; i++) {
        const but = document.createElement("button");
        but.textContent = operations[i];
        but.classList.add("operation");
        button_container.appendChild(but);
    }
    
    const specialOperations = ["=", "C"];
    for (let i = 0; i < specialOperations.length; i++) {
        const but = document.createElement("button");
        but.textContent = specialOperations[i];
        but.classList.add("special-operation");
        button_container.appendChild(but);
    }
}


setup();
