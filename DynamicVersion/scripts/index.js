"use strict"; 
 
window.onload = init; 
 
function init() { 
   const helloBtn = document.getElementById("helloBtn"); 
   helloBtn.onclick = showHiThereInPara;  
};
 
function showHiThereInPara() { 
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "Hi there!";
};

