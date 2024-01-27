/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1,num2){
    return num1 + num2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector('#sum').value = add(addNumber1,addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
function subtract(num1,num2){
    return `${num1 - num2}`;
}

function subtractNumbers(){
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (num1,num2) => `${num1 * num2}`;

function multiplyNumbers(){
    let mulNumber1 = Number(document.querySelector('#factor1').value);
    let mulNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(mulNumber1,mulNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers)


/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => `${num1 / num2}`;

function divideNumber(){
    let divNumber1 = Number(document.querySelector('#dividend').value);
    let divNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divNumber1, divNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumber)
/* Decision Structure */
function discount(){
    let numeric_value = Number(document.querySelector("#subtotal").value);
    let checkbox = document.querySelector("#member")
    let message = document.querySelector("#para")
    if(checkbox.checked){
        document.querySelector("#total").innerHTML = (numeric_value * 0.15);
    } else{
        document.querySelector("#total").innerHTML = numeric_value;
        message.innerHTML=`<p> You are not a member so you wont receive discount </p>`
    }
}
document.querySelector("#getTotal").addEventListener('click', discount)

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13];
/* Output Source Array */
document.querySelector("#array").innerHTML = numbersArray
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 == 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(x => x * 2);
/* Output Sum of Multiplied by 2 Array */
function sumOfMultiplied(array){
    multiplication = array.map(x => x * 2).reduce((sum,number) =>  sum + number)
    return multiplication
}
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied(numbersArray)



