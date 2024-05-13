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

const answerFieldDisplay = document.getElementById("answerFieldDisplay");

window.onload = init;

function init(){
    submitAddButton.onclick = onAddButtonClicked;
    submitSubButton.onclick = onSubButtonClicked;
    submitMulButton.onclick = onMulButtonClicked;
    submitDivButton.onclick = onDivButtonClicked;
}

function onAddButtonClicked(){

    // get the known values from the HTML Elements, place them in variables.  Be sure to convert them to numbers.
    let userEnteredNumber1 = number1Field.value;
    let userEnteredNumber2 = number2Field.value;


    // compute the values that we do not already know.
    let sum = userEnteredNumber1 + userEnteredNumber2;

    // display our results.

    let answerFieldDisplay = sum;

}