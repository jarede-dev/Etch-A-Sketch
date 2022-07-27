// create divs
let cont = document.createElement("div");
let sqr = document.createElement("div");

// add id and class
let a = cont.setAttribute("id", "container");
let b = sqr.setAttribute("class", "square");

// select the elements
let container = document.querySelector("#container");
let square = document.querySelector(".square");

// output to DOM
cont.appendChild(sqr);
document.body.appendChild(cont);
