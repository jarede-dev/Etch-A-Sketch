//select elements
let square = document.querySelector(".square");
let container = document.querySelector("#container");
let mainContainer = document.querySelector("#mainContainer");

let btn = document.querySelector("#askNumber");
let input = document.querySelector("#input");

//append and output to DOM
container.appendChild(square);

mainContainer.appendChild(container);

document.body.appendChild(mainContainer);

// declares i
let i = 0;

// loops square class
for(i; i <= 256 - 2; i++){
    const square = document.createElement("div");
    square.classList.add("square", "square-" + i );
    container.appendChild(square);
    //console.log(square);
}

//button responsiveness
document.getElementById("askNumber").addEventListener("click", getNumber, false);

function getNumber(){
    console.log(input.value);
}