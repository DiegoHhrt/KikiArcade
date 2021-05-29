window.addEventListener("load", ()=>{
    var canvas = document.getElementById("pantalla");
    var ctx = canvas.getContext("2d");
    var pantalla = 0;
    var opcion = 1;

    function fondo()
    {
        ctx.beginPath();
            ctx.rect(0,0,canvas.width,canvas.height);
            ctx.fillStyle = "#3BF2E0";
            ctx.fill();
        ctx.closePath();
        ctx.beginPath();
            ctx.rect(0,canvas.height/2,canvas.width,canvas.height/2);
            ctx.fillStyle = "#00cc00";
            ctx.fill();
        ctx.closePath();
    }

    function instrucciones()
    {
        ctx.textAlign = "left";
        textObjetivo = "Objetivo: El objetivo del juego es subir tanto como puedas\n";
        textControles = "Controles: Para moverse usar A o D o las felchas <- y -> para pausar usar esc\n";
        textRegreso = "Para regrsear presiona esc";
        ctx.font = "20px Arial";
        ctx.strokeText(textControles, 0, 100);
        ctx.strokeText(textObjetivo, 0, 150);
        ctx.strokeText(textRegreso, 0,50);
    }

    function casillamenu()
    {
        if(opcion == 1)
        {
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.strokeText("Kiki Jump", canvas.width/2, 50);
            ctx.beginPath();
                ctx.rect(300,300,200,50);
                ctx.fillStyle = "#E7F543";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Jugar", 400, 335);
            ctx.closePath();
            ctx.beginPath();
                ctx.rect(300,400,200,50);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Como se juega", 400, 435);
            ctx.closePath();
        }
        if(opcion == 2)
        {
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.strokeText("Kiki Jump", canvas.width/2, 50);
            ctx.beginPath();
                ctx.rect(300,300,200,50);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Jugar", 400, 335);
            ctx.closePath();
            ctx.beginPath();
                ctx.rect(300,400,200,50);
                ctx.fillStyle = "#E7F543";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Como se juega", 400, 435);
            ctx.closePath();
        }
    }


    function draw(){
        if(pantalla == 0)
        {
            fondo();
            casillamenu();
        }
        if(pantalla == 2)
        {
            fondo();
            instrucciones();
        }
        requestAnimationFrame(draw);
    }

    document.querySelector("body").addEventListener("keydown", (e)=>{
        console.log(e.key);
        //controles de la pantalla 0: menu
        if(pantalla == 0)
        {
            if(e.key == "ArrowDown")
            {
                if(opcion == 1)
                {
                    opcion = 2;
                }
                else
                {
                    opcion = 1;
                }
            }
            else if(e.key == "ArrowUp")
            {
                if(opcion == 1)
                {
                    opcion = 2;
                }
                else
                {
                    opcion = 1;
                }
            }
            else if(e.key == "Enter")
            {
                if(opcion == 1)
                {
                    pantalla = 1;
                }
                else
                {
                    pantalla = 2;
                }
            }
        }
        if(pantalla == 2)
        {
            if(e.key == "Escape")
            {
                pantalla = 0;
            }
        }
    })

    requestAnimationFrame(draw);
    
})