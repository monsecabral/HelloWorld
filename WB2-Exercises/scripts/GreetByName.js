"use strict";
// I want my text value from the user

const userInput = document.getElementById("userInput");

// I want my button from the html file

const submitButton = document.getElementById("submitButton");

// I want to select the element to display a message

const displayName = document.getElementById("displayName");

window.onload = init; //This is running when the window load

function init(){
    //const submitButton = document.getElementById("submitButton");
    submitButton.onclick = onGreetUserBtnClicked;
    
};

function onGreetUserBtnClicked(){

    //input (what we know)
    let userEnteredName = userInput.value;


    //computation (what do we need to figure out)
    let message = "Hello " + userEnteredName + "!";

    //display the result
  
    alert(message); 
    // 
};