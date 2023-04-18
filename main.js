canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var last_x, last_y;

color="black";
wol=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    wol=document.getElementById("Width_of_line").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wol;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}

function cleararea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}