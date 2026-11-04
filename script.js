function add(num1, num2) {
    return num1 + num2
};

function subtract(num1, num2) {
    return num1 - num2
};

function multiply(num1, num2) {
    return num1 * num2
};

function divide(num1, num2) {
    return num1 / num2
};

let number1 = 0;
let operator = 0;
let number2 = 0;

function operate(num1, opr, num2) {
    if (opr === "+") return add(num1, num2)
    else if (opr === "-") return subtract(num1, num2)
    else if (opr === "x") return multiply(num1, num2)
    else if (opr === "/") return divide(num1, num2)
}

const addBtn = document.querySelector(".add")
const subtractBtn = document.querySelector(".subtract")
const multiplyBtn = document.querySelector(".multiply")
const divideBtn = document.querySelector(".divide")
const equalBtn = document.querySelector(".equal")
const result = document.querySelector(".result")
const numInput = document.querySelector(".numInput")

addBtn.addEventListener("click", () => {
    operator = "+"
})
subtractBtn.addEventListener("click", () => {
    operator = "-"
})
multiplyBtn.addEventListener("click", () => {
    operator = "x"
})
divideBtn.addEventListener("click", () => {
    operator = "/"
})

equalBtn.addEventListener("click", () => {
    result.textContent = operate(3, operator, 4)
})