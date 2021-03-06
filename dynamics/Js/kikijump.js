window.addEventListener("load", ()=>{
    var canvas = document.getElementById("screen");
    var ctx = canvas.getContext("2d");
    var pantalla = 0;
    var opcion = 1;
    var maxDisplay=0, scores=[], user=[], points=[];

    scores=cookieName(false, true);

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
        textControles = "Controles: Para moverse usar A o D o las flechas <- y ->\n";
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
                ctx.strokeText("Enter para jugar", canvas.width/2, (canvas.width/4)+60);
            ctx.closePath();
            ctx.beginPath();
                ctx.rect(canvas.width/4,(canvas.height/4)*2,canvas.width/2,50);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.textAlign = "center";
                ctx.strokeText("C??mo se juega", canvas.width/2, ((canvas.width/4)*2)+80);
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
                ctx.strokeText("C??mo se juega", canvas.width/2, ((canvas.width/4)*2)+80);
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
                ctx.strokeText("C??mo se juega", canvas.width/2, ((canvas.width/4)*2)+80);
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
        //Funci??n que despliega los puntajes
        function pointsDisplay()
        {
            if(maxDisplay<15)
            {
                let decompose, separate;
                if(scores[maxDisplay])
                {
                    decompose=scores[maxDisplay].split(",");
                }
                if(decompose&&decompose.length>=3)
                {
                    user.push(decompose[0]);
                    separate=decompose[1].split("=");
                    points.push(separate[1]);
                }
                maxDisplay++;
            }
            ctx.beginPath();
            ctx.fillStyle="#000000"
            ctx.textAlign="center"
                if(user[0]&&points[0])
                {
                    ctx.fillText(user[0]+":"+points[0], canvas.width/2, (canvas.height/10)*9);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*9);
                }
                if(user[1]&&points[1])
                {
                    ctx.fillText(user[1]+":"+points[1], canvas.width/2, (canvas.height/10)*8);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*8);
                }
                if(user[2]&&points[2])
                {
                    ctx.fillText(user[2]+":"+points[2], canvas.width/2, (canvas.height/10)*7);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*7);
                }
                if(user[3]&&points[3])
                {
                    ctx.fillText(user[3]+":"+points[3], canvas.width/2, (canvas.height/10)*6);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*6);
                }
                if(user[4]&&points[4])
                {
                    ctx.fillText(user[4]+":"+points[4], canvas.width/2, (canvas.height/10)*5);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*5);
                }
                if(user[5]&&points[5])
                {
                    ctx.fillText(user[5]+":"+points[5], canvas.width/2, (canvas.height/10)*4);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*4);
                }
                if(user[6]&&points[6])
                {
                    ctx.fillText(user[6]+":"+points[6], canvas.width/2, (canvas.height/10)*3);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*3);
                }
                if(user[7]&&points[7])
                {
                    ctx.fillText(user[7]+":"+points[7], canvas.width/2, (canvas.height/10)*2);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*2);
                }
                if(user[8]&&points[8])
                {
                    ctx.fillText(user[8]+":"+points[8], canvas.width/2, (canvas.height/10));
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10));
                }
                ctx.fill()
            ctx.closePath();
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
            pointsDisplay();
        }
        requestAnimationFrame(draw);
    }

    //detecta todos las teclas presionadas mientras no se est?? dentro del juego
    document.querySelector("body").addEventListener("keydown", (e)=>{
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
        //Eventos que controlan el movimiento y algunas mec??nicas del juego 
        else if(pantalla==1)
        {
            if(state==1)
            {
                if(e.key==="A"||e.key==="a"||e.key==="ArrowLeft")
                {
                    if((posX+kX)>0)
                    {
                        kX-=10;
                    }
                    else
                    {
                        posX=cWidth;
                        kX=0;
                    }
                }
                if(e.key==="D"||e.key==="d"||e.key==="ArrowRight")
                {
                    if((posX+kX)<cWidth)
                    {
                        kX+=10;
                    }
                    else
                    {
                        posX=0;
                        kX=0;
                    }
                }
                //??nicamente al comienzo del juego se permite usar una tecla para saltar
                if(start&&(e.key==="W"||e.key==="w"||e.key==="ArrowUp"))
                {
                    start=false;
                    //Se inicia un intervalo que suma puntos por cada 5 segundos que vivas
                    scoring=setInterval(() => {
                        punt+=15;
                        console.log("puntear");
                    }, 5000);
                    jump(true);
                }
            }
            //Una vez que has perdido, se puede reinciar el juego o volver al men??
            else
            {
                if(e.key===" ")
                {
                    clearInterval(scoring);
                    plats[0].move(true, 0, cHeight, cWidth);
                    plats[1].move(true, 1, cHeight, cWidth);
                    plats[2].move(true, 2, cHeight, cWidth);
                    plats[3].move(true, 3, cHeight, cWidth);
                    plats[4].move(true, 4, cHeight, cWidth);
                    plats[5].move(true, 5, cHeight, cWidth);
                    plats[6].move(true, 6, cHeight, cWidth);
                    plats[7].move(true, 7, cHeight, cWidth);
                    kX=0, kY=0, posX=0, posY=cHeight, coordXinit=cWidth/2;
                    i=0, change=0, state=1, direction=0, start=true, punt=0, change=false;

                }
                if(e.key==="q"||e.key==="Q")
                {
                    clearInterval(scoring);
                    window.location.reload();
                    window.location="../templates/kikijump.html";
                    return 0;
                }
            }
        }
        //conroles de la segunda vista
        else if(pantalla == 2)
        {
            if(e.key == "Escape")
            {
                pantalla = 0;
            }
        }
        else if(pantalla == 3)
        {
            if(e.key == "Escape")
            {
                pantalla = 0;
            }
        }
    })
    requestAnimationFrame(draw);
    
})