// create divs
let cont = document.createElement("div");
let sqr = document.createElement("div");

// add id and class
let contId = cont.setAttribute("id", "container");
let sqrClass = sqr.setAttribute("class", "square");

// select the elements
let container = document.querySelector("#container");
let square = document.querySelector(".square");

// output to DOM
cont.appendChild(sqr);
document.body.appendChild(cont);

// declare i
let i = 0;

// loop square class
for(i; i <= 254; i++){
    const square = document.createElement("div");
    square.classList.add("square", "square-" + i );
    cont.appendChild(square);
    //console.log(square);
}