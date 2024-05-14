"use strict";

// I want my text values

const number1Field = document.getElementById("number1Field");
const number2Field = document.getElementById("number2Field");

// I want my buttons

const submitAddButton = document.getElementById("submitAddButton");
const submitSubButton = document.getElementById("submitSubButton");
const submitMulButton = document.getElementById("submitMulButton");
const submitDivButton = document.getElementById("submitDivButton");

// I want my element to display a message

const answerField = document.getElementById("answerField");

window.onload = init;

function init(){
    submitAddButton.onclick = onAddButtonClicked;
    submitSubButton.onclick = onSubButtonClicked;
    submitMulButton.onclick = onMulButtonClicked;
    submitDivButton.onclick = onDivButtonClicked;
}

function onAddButtonClicked(){
    console.log("click");
    // get the known values from the HTML Elements, place them in variables.  Be sure to convert them to numbers.
    let userEnteredNumber1 = Number(number1Field.value);
    let userEnteredNumber2 = Number(number2Field.value);
    console.log("userEnteredNumber1, " + userEnteredNumber1);
    console.log("userEnteredNumber2, " + userEnteredNumber2);

    // compute the values that we do not already know.
    let sum = userEnteredNumber1 + userEnteredNumber2;

    console.log(sum);

    // display our results.
    answerField.value = sum;

}

function onSubButtonClicked(){
    console.log("click");

    let userEnteredNumber1 = Number(number1Field.value);
    let userEnteredNumber2 = Number(number2Field.value);

    let sum = userEnteredNumber1 - userEnteredNumber2;

    console.log(sum);

    answerField.value = sum;
}

function onMulButtonClicked(){
    console.log("click");

    let userEnteredNumber1 = Number(number1Field.value);
    let userEnteredNumber2 = Number(number2Field.value);

    let sum = userEnteredNumber1 * userEnteredNumber2;

    console.log(sum);

    answerField.value = sum;   
}

function onDivButtonClicked(){
    console.log("click");

    let userEnteredNumber1 = Number(number1Field.value);
    let userEnteredNumber2 = Number(number2Field.value);

    let sum = userEnteredNumber1 / userEnteredNumber2;

    console.log(sum);

    answerField.value = sum;   
}