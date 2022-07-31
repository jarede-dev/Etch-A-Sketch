let square = document.querySelector(".square");

let container = document.querySelector("#container");
let mainContainer = document.querySelector("#mainContainer");

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

//console.log(container);