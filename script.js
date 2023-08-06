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

var currentOperation = null; // store as string "+", "-", "*", "/" OR null (no operations queued up)

var previousValue = 0;
var currentValue = 0; // displayText.textContent == currentValue AT MOST TIMES -- A NUMBER NOT A STRING

function digitPress(num1) {
    if (currentValue != 0) {
        let temp = "" + currentValue + num1;
        currentValue = Number(temp)
    } else {
        currentValue = num1;
    }
    updateDisplay();

}
function updateDisplay() {
    let displayText = document.querySelector("#display > p");
    displayText.textContent = currentValue;
}
function operationPress(operator) {
    console.log(operator);
    if (currentOperation != null) { // no previous operations to queue, store operator and move to new number
        // evalulate stored operation and update display
    }
    // needs t
    previousValue = currentValue;
    currentValue = 0;
    //updateDisplay();
    currentOperation = operator;
}

function specialOperationPress(operator) { // operator either one of "=" or "C"
    console.log(operator);
    if (operator == "C") {
        // CLEAR EVERYTHING
        currentValue = 0;
        currentOperation = null;
        previousValue = null;
        updateDisplay();
    }
    if (operator == "=") {
        currentValue = operate(currentOperation, previousValue, currentValue);
        updateDisplay();
        previousValue = currentValue;
        currentValue = 0;
        
    }
}
function operate(operator, num1, num2) {
    let fn; // fn undefined if operator not in "+", "-", "*", "/"
    console.log(operator);
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
        but.onclick = () => digitPress(i);
        button_container.appendChild(but);
    }
    const operations = ["+", "-", "*", "/"];
    for (let i = 0; i < operations.length; i++) {
        const but = document.createElement("button");
        but.textContent = operations[i];
        but.classList.add("operation");
        but.onclick = () => operationPress(operations[i]);
        button_container.appendChild(but);
    }
    
    const specialOperations = ["=", "C"];
    for (let i = 0; i < specialOperations.length; i++) {
        const but = document.createElement("button");
        but.textContent = specialOperations[i];
        but.classList.add("special-operation");
        button_container.appendChild(but);
        but.onclick = () => specialOperationPress(specialOperations[i]);
    }

    // setup text on display
    let displayText = document.querySelector("#display > p");
    displayText.textContent = currentValue;
}


setup();
