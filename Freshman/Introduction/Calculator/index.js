let num1 = 45
let num2 = 15

// update num1-el and num2-el text content with the value stored in the num1 variable
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

//create the function to add
function add() {
    let add = num1 + num2
    sumEl.textContent = "Result: "+ add
}

//create the function to subtract
function subtract() {
    let subtract = num1 - num2
    sumEl.textContent = "Result: "+ subtract
}

//create the function to divide
function divide() {
    let divide = num1 / num2
    sumEl.textContent = "Result: "+ divide
}

//create the function to multiply
function multiply() {
    let multiply = num1 * num2
    sumEl.textContent = "Result: "+ multiply
}
