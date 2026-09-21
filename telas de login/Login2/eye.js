"use strict";
const input = document.querySelector("input");
const button = document.querySelector("#senha");
button.addEventListener('click', senha);

function togglePass() {

 function senha( ) {
    if (Input.type == "password") {
        Input.type = "text";
        button.textContent = "😊";
    } else {
        input.type = "password";
        button.textContent = "😒";
    }
 }}