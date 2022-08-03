//select elements
let square = document.querySelector(".square");
let container = document.querySelector("#container");
let mainContainer = document.querySelector("#mainContainer");

let btn = document.querySelector("#askNumber");
let input = document.querySelector("#input");
let clear = document.querySelector("#clear");

//append and output to DOM
container.appendChild(square);

mainContainer.appendChild(container);

document.body.appendChild(mainContainer);

// declares i
let i = 0;

// loops square class

//button responsiveness
document.getElementById("askNumber").addEventListener("click", getNumber, false);

function randomColor(){
    let value = "0123456789ABCDEF";
    var color = "#";
    for(let i = 0; i < 6; i++){
        color += value[Math.floor(Math.random() * 16)];
    } return color;
}

function getNumber(){
    let getAmount = document.getElementById("input").value;
    for(i; i <= getAmount * getAmount - 2; i++){
        const square = document.createElement("div");
        square.classList.add("square", "square-" + i );
        container.appendChild(square);
        document.getElementById("container").style.gridTemplateColumns = `repeat(${getAmount}, 10px)`;
        document.getElementById("container").style.gridTemplateColumns = `repeat(${getAmount}, 10px)`;
        //console.log(square);
    }
    console.log(getAmount);
}

document.getElementById("clear").addEventListener("click", clearCanvas, false);

function clearCanvas(){
    document.location.reload();
}