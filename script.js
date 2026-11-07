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

let num1Selected = true;
let number1 = "";
let operator = "";
let number2 = "";

function operate(num1, opr, num2) {
    nnum1 = Number(num1)
    nnum2 = Number(num2)
    if (opr === "+") return add(nnum1, nnum2)
    else if (opr === "-") return subtract(nnum1, nnum2)
    else if (opr === "x") return multiply(nnum1, nnum2)
    else if (opr === "/") return divide(nnum1, nnum2)
}

const addBtn = document.querySelector(".add")
const subtractBtn = document.querySelector(".subtract")
const multiplyBtn = document.querySelector(".multiply")
const divideBtn = document.querySelector(".divide")
const equalBtn = document.querySelector(".equal")
const result = document.querySelector(".result")
const digits = document.querySelector(".digits")
const clear = document.querySelector(".clearBtn")

addBtn.addEventListener("click", () => {
    operator = "+"
    result.textContent = ""
    num1Selected = false
})
subtractBtn.addEventListener("click", () => {
    operator = "-"
    result.textContent = ""
    num1Selected = false
})
multiplyBtn.addEventListener("click", () => {
    operator = "x"
    result.textContent = ""
    num1Selected = false
})
divideBtn.addEventListener("click", () => {
    operator = "/"
    result.textContent = ""
    num1Selected = false
})


digits.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLButtonElement)) return
    if (num1Selected === true) {
        number1 += String(event.target.textContent)
        result.textContent = number1
    }
    else {
        number2 += String(event.target.textContent)
        result.textContent = number2
    }
})

clear.addEventListener("click", () => {
    number1 = ""
    result.textContent = ""
    number2 = ""
    num1Selected = true
})

equalBtn.addEventListener("click", () => {
    number1 = operate(number1, operator, number2)
    result.textContent = number1
    number2 = ""
    num1Selected = true
    operator = ""
})