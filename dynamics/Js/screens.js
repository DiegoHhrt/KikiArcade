//Clase plataforma, establece un ancho semi-variabñe, un alto fijo, una ruta de imágen psudoaleatoria
//Establece una posición X aleatoria dentro del canvas y una posición Y semi-variable 
class Platform{
    //Recibe como parámetros el alto y ancho del canvas, así como un contador que ayuda a determinar el órden de las plataformas
    constructor(cW, cH, c)
    {
        this.Wi=cW/5+Math.random();
        this.He=cH/10;
        this.Img=this.platformPath();
        this.pX = Math.round(Math.random()*(cW - this.Wi));
        this.pY = ((cH/8)*c)+ Math.round(Math.random()*(cH/16));
    }
    //Método que asigna una imágen de plataforma aleatoria al objeto
    platformPath()
    {
        switch (Math.round(Math.random()*3)+1)
        {
            case 1:
                return pGreen;
            case 2:
                return pPurple;
            case 3:
                return pRed;
            case 4:
                return pYellow;
        }
    }
    move (activate=false, co, cHe, cWi)
    {
        if(activate)
        {
            this.pY = ((cHe/8)*co)+ Math.round(Math.random()*(cHe/16));
            this.pX = Math.round(Math.random()*(cWi - this.Wi));
        }
    }
}

var can = document.getElementById("pantalla");
var cont = can.getContext("2d");
var cWidth=can.width, cHeight=can.height, kX=0, kY=0, posX=0, posY=cHeight, coordXinit=cWidth/2;
var numP=Math.round(Math.random()*9)+1;
var plats = [];
var i=0, change=0, down, up, state=1, direction=0, start=true, punt=0, change=false;

var kikiSprite=new Image(cWidth/8, cWidth/8);
kikiSprite.src = "../statics/Images/kikiSpriteV1.png";

var pPurple=new Image();
var pYellow=new Image();
var pRed=new Image();
var pGreen=new Image();

loadImg();
generatePl();
//Función que inicializa los objetos imágen que contienen la ruta a las plataformas
function loadImg () {
    pPurple.src="../statics/Images/pPurple.png";
    pYellow.src="../statics/Images/pYellow.png";
    pRed.src="../statics/Images/pRed.png";
    pGreen.src="../statics/Images/pGreen.png";
}
//Se genera una cantidad de objetos plataforma que se asignan a un arreglo para faculitar su manipulación, se lleva un contador que permite al constructor asignar un órden
function generatePl()
{
    let c=0;
    while(plats.length<8)
    {
        plats.push(new Platform(cWidth, cHeight, c));
        c++;
    }

}
//Llamada en la función recursiva de dibujo que maneja al juego de kiki jump
function screen1()
{
    cont.beginPath();
    if(state==1)
    {
        cont.rect(0,0,cWidth,cHeight);
        cont.fillStyle = "#00b4c4";
        cont.fill();
        collision();
        img(kX,kY);  
        score();    
        cont.beginPath();
            cont.fillStyle="#000000";
            cont.font = "20px sans-serif";
            cont.fillText("Score: "+ punt, 20, cHeight/20);
            cont.fill();
        cont.closePath();
        if(start)
        {
            cont.beginPath();
                cont.fillStyle="#000000";
                cont.font = "20px sans-serif";
                cont.fillText("Presiona W o la flecha hacia arriba para comenzar", cWidth/20, cHeight/4);
                cont.fill();
            cont.closePath();
        } 
    }
    else
    {
        cont.rect(0,0, cWidth, cHeight);
        cont.fillStyle="#142e4f";
        cont.fill();
        cont.beginPath();
            cont.font = "25px sans-serif";
            cont.fillStyle="#6bffa6";
            cont.textAlign="center";
            cont.fillText("Perdiste :(", cWidth/2, cHeight/5);
            cont.fillText("Tu puntaje es: "+ punt, cWidth/2, (cHeight/5)*2);
            cont.fillText("Presiona la barra espaciadora para reiniciar", cWidth/2, (cHeight/5)*3);
            cont.fillText("Presiona Escape o Q para volver al menú", cWidth/2, (cHeight/5)*4);
            cont.fill();
        cont.closePath();
    }
    cont.closePath();
    return 1;
}
//Se controla cómo se dibujan las imágenes
function img (x, y)
{
    //Game platforms
    cont.drawImage(plats[0].Img, plats[0].pX, plats[0].pY, plats[0].Wi, plats[0].He);
    cont.drawImage(plats[1].Img, plats[1].pX, plats[1].pY, plats[1].Wi, plats[1].He);
    cont.drawImage(plats[2].Img, plats[2].pX, plats[2].pY, plats[2].Wi, plats[2].He);
    cont.drawImage(plats[3].Img, plats[3].pX, plats[3].pY, plats[3].Wi, plats[3].He);
    cont.drawImage(plats[4].Img, plats[4].pX, plats[4].pY, plats[4].Wi, plats[4].He);
    cont.drawImage(plats[5].Img, plats[5].pX, plats[5].pY, plats[5].Wi, plats[5].He);
    cont.drawImage(plats[6].Img, plats[6].pX, plats[6].pY, plats[6].Wi, plats[6].He);
    cont.drawImage(plats[7].Img, plats[7].pX, plats[7].pY, plats[7].Wi, plats[7].He);
    //En caso de alcanzar el borde superior de la pantalla de juego, se reacomodan las plataformas existentes y la posición de kiki se reestablece al fondo de la pantalla
    if(posY+y<=10)
    {
        plats[0].move(true, 0, cHeight, cWidth);
        plats[1].move(true, 1, cHeight, cWidth);
        plats[2].move(true, 2, cHeight, cWidth);
        plats[3].move(true, 3, cHeight, cWidth);
        plats[4].move(true, 4, cHeight, cWidth);
        plats[5].move(true, 5, cHeight, cWidth);
        plats[6].move(true, 6, cHeight, cWidth);
        plats[7].move(true, 7, cHeight, cWidth);
        kY=0;
        posY=cHeight-10;
        change=true;
        clearInterval(down);
        clearInterval(up);
        jump(true, true);
    }
    //Kiki img
    cont.drawImage(kikiSprite, posX+x, (posY+y)-kikiSprite.height, cWidth/8, cWidth/8);
}
//Función que controlan las colisiones
function collision () {
    //Sólo en caso de ir descendiendo, rebotas con las plataformas
    if(direction==1)
    {
        //colisiones con las plataformas individuales
        if(((posY+kY-cHeight/20)<=plats[7].pY&&posY+kY>=((plats[7].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[7].pX+plats[7].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[7].pX))
        {
            clearInterval(down);
            clearInterval(up);
            jump(true);
        }
        if(((posY+kY-cHeight/20)<=plats[6].pY&&posY+kY>=((plats[6].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[6].pX+plats[6].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[6].pX))
        {
            clearInterval(down);
            clearInterval(up);
            jump(true);
        }
        if(((posY+kY-cHeight/20)<=plats[5].pY&&posY+kY>=((plats[5].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[5].pX+plats[5].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[5].pX))
        {
            clearInterval(down);
            clearInterval(up);
            jump(true);
        }
        if(((posY+kY-cHeight/20)<=plats[4].pY&&posY+kY>=((plats[4].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[4].pX+plats[4].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[4].pX))
        {
            clearInterval(down);
            clearInterval(up);
            jump(true);
        }
        if(((posY+kY-cHeight/20)<=plats[3].pY&&posY+kY>=((plats[3].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[3].pX+plats[3].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[3].pX))
        {
        
            clearInterval(down);
            clearInterval(up); 
            jump(true);
        }
        if(((posY+kY-cHeight/20)<=plats[2].pY&&posY+kY>=((plats[2].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[2].pX+plats[2].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[2].pX))
        {
            clearInterval(down);
            clearInterval(up);
            jump(true);
        }
        if(((posY+kY-cHeight/20)<=plats[1].pY&&posY+kY>=((plats[1].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[1].pX+plats[1].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[1].pX))
        {
            clearInterval(down);
            clearInterval(up);
            jump(true);
        }
        if(((posY+kY-cHeight/20)<=plats[0].pY&&posY+kY>=((plats[0].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[0].pX+plats[0].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[0].pX))
        {
            clearInterval(down);
            clearInterval(up);
            jump(true);
        }
    }
}
//Maneja los saltos en caso de haber colisionado con una plataforma
function jump(col, transition) {
    direction=0;
    let j=0;
    if(col)
    {
        clearInterval(down);
        up = setInterval(() => {
            if(posY+kY>=0)
            {
                kY-=4.5;
            }
            j+=4.5;
            //En caso de tratarse de una transición la altura del salto se reduce ligeramente antes de caer
            if(transition&&j>=cHeight/4)
            {
                fall();
            }
            //Distancia que recorre un salto antes de empezar a caer
            else if(j>=cHeight/3)
            {
                fall();
            }
        }, 1);
    }
}
//Controla la caída progresiva
function fall() {
    direction=1;
    clearInterval(up);
        down = setInterval(() => {
            if(posY+kY>=cHeight)
            {
                loosing();
            }
            else
            {
                kY+=7;
            }
        }, 1);
}
//controla si el juego se ha perdido o no 
function loosing () {
    state=0;
    clearInterval(scoring);
    clearInterval(up);
    clearInterval(down);
}
//Además de los puntos que ganas con cada segundo que vivas, se te añade un bonus por cada nueva capa del mundo
function score() {
    if(change)
    {
        let multiplier=Math.random();
        punt+=Math.round((100)*(1+multiplier));
        change=false; 
        console.log(multiplier);
    }
}
//Eventos que controlan el movimiento y algunas mecánicas del juego 
document.querySelector("body").addEventListener("keydown", (event)=>{
    if(state==1)
    {
        if(event.key==="A"||event.key==="a"||event.key==="ArrowLeft")
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
        if(event.key==="D"||event.key==="d"||event.key==="ArrowRight")
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
        //Únicamente al comienzo del juego se permite usar una tecla para saltar
        if(start&&(event.key==="W"||event.key==="w"||event.key==="ArrowUp"))
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
    //Una vez que has perdido, se puede reinciar el juego o volver al menú
    else
    {
        if(event.key===" ")
        {
            window.location.reload();
        }
        if(event.key==="Escape"||event.key==="q"||event.key==="Q")
        {
            clearInterval(scoring);
            return 0;
        }
    }
})