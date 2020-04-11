var colors = ["red", "blue", "green", "orange", "purple", "black", "yellow"];

var btn = document.getElementById("btn");
var screen = document.getElementById("screen");

btn.addEventListener("click", function(){
    var index = parseInt((Math.random()*colors.length)+1);
    
    screen.style.background = `${colors[index]}`

})