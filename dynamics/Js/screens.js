var can = document.getElementById("pantalla");
var cont = can.getContext("2d");
var cWidth=can.width, cHeight=can.height;
function screen1()
{
    cont.clearRect(0,0, cWidth, cHeight);
    cont.beginPath();
        cont.rect(0,0,cWidth,cHeight);
        cont.fillStyle = "#00b4c4";
        cont.fill();
    cont.closePath();
}