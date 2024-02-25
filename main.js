var mouseEvent = "empty";
console.log(mouseEvent);
var last_position_of_x = 0;
var last_position_of_y = 0;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
radius = 10;
document.getElementById("color_input").value=color;
document.getElementById("width_input").value=width_of_line;
document.getElementById("radius_input").value=radius;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;
    radius = document.getElementById("radius_input").value;
    mouseEvent = "mouseDown";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUP"
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave"
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    //ctx.arc(x,y,radius,start_angle,end_angle)
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI)
    ctx.stroke();
}
}

function clearCanvas(){
    
    ctx.clearRect(0,0,800,600);
}