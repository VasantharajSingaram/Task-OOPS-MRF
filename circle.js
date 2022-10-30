var cr = prompt("Enter Radius 1-100")
// Cicle
class Shape {
    constructor(name, color, radius) {
        this.name = name;
        this.color = color;
        this.radius = radius;

    }
}

var circle = new Shape("circle", "black", cr);
console.log(circle);


function draw()
  {
var canvas = document.getElementById('circle');
if (canvas.getContext)
{
var ctx = canvas.getContext('2d'); 
var X = canvas.width / 2;
var Y = canvas.height / 2;
var R = 1;
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
if(cr>100){
    alert("Please Enter 1 to 100");
    ctx.lineWidth = "error";
    document.getElementById('text').innerHTML = "<h1>Please Enter Radius From 1-100 Only!!!<h1><br>😵"
}else{
    document.getElementById('text').innerHTML = "<h1>Here is your Circle!!!<h1>"
ctx.lineWidth = cr;
ctx.strokeStyle = '#000000';
ctx.stroke();
}
}
  }