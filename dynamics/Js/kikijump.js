window.addEventListener("load", ()=>{
    var canvas = document.getElementById("pantalla");
    var ctx = canvas.getContext("2d");
    var pantalla = 0;

    function fondo()
    {
        ctx.beginPath();
            ctx.rect(0,0,canvas.width,canvas.height);
            ctx.fillStyle = "#0D3A48";
            ctx.fill();
        ctx.closePath();
    }

    function casillamenu(seleccion)
    {
        ctx.beginPath();
            ctx.arc(canvas.width/2,canvas.height/2,25,0,Math.PI*2);
            ctx.fillStyle = "#0D1434";
            ctx.fill();
            ctx.moveTo();
        ctx.closePath();
    }


    function draw(){
        if(pantalla == 0)
        {
            fondo();
            casillamenu();
        }
        else if (pantalla==1)
        {
            pantalla = screen1();
        }
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    
})