// create divs
let cont = document.createElement("div");
let sqr = document.createElement("div");

// add id and class
let contId = cont.setAttribute("id", "container");
let sqrClass = sqr.setAttribute("class", "square");

// select the elements
let container = document.querySelector("#container");
let square = document.querySelector(".square");

// outputs to DOM
cont.appendChild(sqr);
document.body.appendChild(cont);

// declares i
let i = 0;

// loops square class
for(i; i <= 256 - 2; i++){
    const square = document.createElement("div");
    square.classList.add("square", "square-" + i );
    cont.appendChild(square);
    //console.log(square);
}