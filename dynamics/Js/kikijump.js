window.addEventListener("load", ()=>{
    var canvas = document.getElementById("screen");
    var ctx = canvas.getContext("2d");
    var pantalla = 0;
    var opcion = 1;

    //colorea el fondo
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

    //pone las instrucciones 
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

    //dibuja los cuadros del menu
    function casillamenu()
    {
        //si la opcion es 1 el primer recuadro aparece resaltado
        if(opcion == 1)
        {
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.strokeText("Kiki Jump", canvas.width/2, 50);
            ctx.beginPath();
                ctx.rect(canvas.width/4,canvas.height/4,canvas.width/2,50);
                ctx.fillStyle = "#E7F543";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Jugar", canvas.width/2, (canvas.width/4)+60);
            ctx.closePath();
            ctx.beginPath();
                ctx.rect(canvas.width/4,(canvas.height/4)*2,canvas.width/2,50);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Como se juega", canvas.width/2, ((canvas.width/4)*2)+80);
            ctx.closePath();
            ctx.beginPath();
                ctx.rect(canvas.width/4,(canvas.height/4)*3,canvas.width/2,50);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Puntaje", canvas.width/2, ((canvas.width/4)*3)+110);
            ctx.closePath();
        }
        //si la opcion es 2 la segunda casilla aparece remarcada
        if(opcion == 2)
        {
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.strokeText("Kiki Jump", canvas.width/2, 50);
            ctx.beginPath();
                ctx.rect(canvas.width/4,canvas.height/4,canvas.width/2,50);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Jugar", canvas.width/2, (canvas.width/4)+60);
            ctx.closePath();
            ctx.beginPath();
                ctx.rect(canvas.width/4,(canvas.height/4)*2,canvas.width/2,50);
                ctx.fillStyle = "#E7F543";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Como se juega", canvas.width/2, ((canvas.width/4)*2)+80);
            ctx.closePath();
            ctx.beginPath();
                ctx.rect(canvas.width/4,(canvas.height/4)*3,canvas.width/2,50);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Puntaje", canvas.width/2, ((canvas.width/4)*3)+110);
            ctx.closePath();
        }
        if(opcion == 3)
        {
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.strokeText("Kiki Jump", canvas.width/2, 50);
            ctx.beginPath();
                ctx.rect(canvas.width/4,canvas.height/4,canvas.width/2,50);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Jugar", canvas.width/2, (canvas.width/4)+60);
            ctx.closePath();
            ctx.beginPath();
                ctx.rect(canvas.width/4,(canvas.height/4)*2,canvas.width/2,50);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Como se juega", canvas.width/2, ((canvas.width/4)*2)+80);
            ctx.closePath();
            ctx.beginPath();
                ctx.rect(canvas.width/4,(canvas.height/4)*3,canvas.width/2,50);
                ctx.fillStyle = "#E7F543";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("Puntaje", canvas.width/2, ((canvas.width/4)*3)+110);
            ctx.closePath();
        }
    }


    //funcion recursiva
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
        else if(pantalla == 2)
        {
            fondo();
            instrucciones();
        }
        else if(pantalla == 3)
        {
            fondo();
            /*#####Falta poner aqui los puntajes#####*/
        }
        requestAnimationFrame(draw);
    }

    //detecta todos las teclas precionadas
    document.querySelector("body").addEventListener("keydown", (e)=>{
        console.log(e.key);
        //controles de la pantalla 0: menu
        if(pantalla == 0)
        {
            //si la flecha se mueve abajo cambia la opcion
            if(e.key == "ArrowDown")
            {
                if(opcion == 1 || opcion == 2)
                {
                    opcion++;
                }
                else
                {
                    opcion = 1;
                }
            }
            else if(e.key == "ArrowUp")
            {
                if(opcion == 3 || opcion == 2)
                {
                    opcion--;
                }
                else
                {
                    opcion = 3;
                }
            }
            //cambia la pantalla
            else if(e.key == "Enter")
            {
                if(opcion == 1)
                {
                    pantalla = 1;
                }
                else if(opcion == 2)
                {
                    pantalla = 2;
                }
                else if(opcion == 3)
                {
                    pantalla = 3;
                }
            }
        }
        //conroles de la segunda vista
        if(pantalla == 2)
        {
            if(e.key == "Escape")
            {
                pantalla = 0;
            }
        }
        if(pantalla == 3)
        {
            if(e.key == "Escape")
            {
                pantalla = 0;
            }
        }
    })
    requestAnimationFrame(draw);
    
})