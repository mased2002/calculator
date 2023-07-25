// const { NULL } = require("mysql/lib/protocol/constants/types");

let num1 = 0;
let num2 = 0;
let sign;
let currentNumber = "0";
let s = 0;
let result = 0;
const display = document.querySelector('#dis');
const btnNum = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equals');
const clear =document.querySelector('.clear')

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
    if (b === 0) {
        console.log("ERROR: Nothing is divided by Zero");
        return undefined;
    }
    return a / b;
}

function operate(operator, ...args) {
    if (operator === "+") {
        return add(args[0], args[1]);
    } else if (operator === "-") {
        return subtract(args[0], args[1]);
    } else if (operator === "/") {
        return divide(args[0], args[1]);
    } else if (operator === "x") {
        return multiply(args[0], args[1]);
    } else {
        return "you chose the wrong operator";
    }
}


btnNum.forEach((num) => {
    num.addEventListener("click", () => {
        const clickval = num.textContent;
        if (currentNumber === "0" || currentNumber === 0) {
            currentNumber = clickval;
        } else {
            currentNumber += clickval;
        }
        console.log(currentNumber);
        display.textContent = currentNumber;
    });
});


operators.forEach(operator => {
    operator.addEventListener('click', () => {

        if (num1 === 0 || num1 === null) {
            num1 = currentNumber;
            sign = operator.textContent;
            console.log(num1);
            console.log(sign);
            currentNumber = 0;
            

            
            // num1;
            // console.log(num1)
            // sign = operator.textContent
            // num2 = Number(currentNumber);
            // console.log(num2)
            // // var result = operate(sign, num1, num2);
            // // display.textContent = result;

            // num1 = result;
            // console.log(num1);
            // sign = operator.textContent;
            // console.log(sign);

            // currentNumber = '0';
        } else {
            num2 = currentNumber;
            display.textContent = num2
             result = operate(sign, Number(num1), Number(num2))
            sign = operator.textContent
            console.log(sign)

            num1 = result;
            display.textContent = Math.round((result) * 100) /100;

            // sign = '';
            
        }
            currentNumber = 0;

        // if(sign !== null || sign !== 0 || sign !== '0'){
        //     s++;
        //     console.log("this is the times:" + s)
        // }
        
    });
});
equal.addEventListener("click", () => {
    if(num2 === 0){
        result = operate(sign, Number(num1), Number(currentNumber))
        display.textContent = Math.round((result) * 100) /100;
    }else{
        num2 = currentNumber;
            display.textContent = num2
             result = operate(sign, Number(num1), Number(num2))
            // sign = operator.textContent
            // console.log(sign)

            num1 = result;
            display.textContent = Math.round((result) * 100) /100;

            // sign = '';
            
        // result = operate(sign, Number(num1), Number(num2))
        // display.textContent = Math.round((result) * 100) /100;
        // sign =''
    }
    // result = operate(sign, Number(num1), Number(num2))
    // sign = ''
    
    // num2 =''
    // currentNumber = 0
})
    // function equalas(){
    //     if (num1 !== 0 && sign !== null && currentNumber !== '0') {
    //         num2 = Number(currentNumber);
    //         var result = operate(sign, num1, num2);
    //         display.textContent = Math.round((result) * 10) /10 ;
    
    //         num1 = result;
    //         // display.textContent = Math.round((result) * 10) /10;
    //         // sign = null;
    //         num2 = 0;
    //         currentNumber = '0';
    //     }
    // }
    // equal.addEventListener('click', equalas);
    // if (num1 !== 0 && sign !== null && currentNumber !== '0') {
    //     num2 = Number(currentNumber);
    //     var result = operate(sign, num1, num2);
    //     display.textContent = Math.round((result) * 10) /10;

    //     num1 = result;
    //     // sign = null;
    //     num2 = 0;
    //     currentNumber = '0';
    // }


clear.addEventListener("click", () => {
    num1 = 0
    num2 = 0
    sign = null
    currentNumber = 0
    display.textContent = ''
})
