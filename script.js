// function that makes the grid
function getGrid(size){
    let container = document.querySelector(".container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let grid = size * size;
    for(let i = 0; i < grid; i++){
    let square = document.createElement("div");
    square.addEventListener("mouseover", getColor);
    square.style.backgroundColor = "white";
    container.insertAdjacentElement("beforeend", square);
     }
   }
   
   getGrid(16);
   
   // changes the size of the grid
   function changeGridSize(input){
    if(input > 0 && input <= 100){
    console.log(getGrid(input));
    } else{
    alert("Enter size only from 1 to 100");
    }
   }
   
   //random color
   function getColor(){
       let value = "0123456789ABCDEF";
       var color = "#";
       for(let i = 0; i < 6; i++){
           color += value[Math.floor(Math.random() * 16)];
       } this.style.backgroundColor = color;
   }
   
   //buttons and input
   //select elements
   let btn = document.querySelector("#askNumber");
   let input = document.querySelector("#input");
   let clear = document.querySelector("#clear");
   
   function clearCanvas(){
       document.location.reload();
   }
   
   document.getElementById("clear").addEventListener("click", clearCanvas, false);
   
   