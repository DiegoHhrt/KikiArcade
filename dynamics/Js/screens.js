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
    move (activate=false)
    {
        if(activate)
        {
            
        }
    }
}

var can = document.getElementById("pantalla");
var cont = can.getContext("2d");
var cWidth=can.width, cHeight=can.height, kX=0, kY=0, posX=0, posY=cHeight, coordXinit=cWidth/2;
var numP=Math.round(Math.random()*9)+1;
var plats = [];
var i=0, change=0;

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
        ++c;
    }

}
//Llamada en la función recursiva de dibujo que maneja al juego de kiki jump
function screen1()
{
    cont.beginPath();
        cont.rect(0,0,cWidth,cHeight);
        cont.fillStyle = "#00b4c4";
        cont.fill();
        jump();
        img(kX,kY);       
    cont.closePath();
}
//En esta función se dibujan las imágenes
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
    //Kiki img
    cont.drawImage(kikiSprite, posX+x, (posY+y)-kikiSprite.height, cWidth/8, cWidth/8);
}
//Función que controlan las colisiones y saltos
function jump () {
    // setTimeout(()=>{
    //     ky+=(cHeight/8)*2
    // }, 500)

    //colisiones con plataformas
    if(((posY+kY-cHeight/20)<=plats[7].pY&&posY+kY>=((plats[7].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[7].pX+plats[7].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[7].pX))
    {
       console.log("same height1")
    }
    if(((posY+kY-cHeight/20)<=plats[6].pY&&posY+kY>=((plats[6].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[6].pX+plats[6].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[6].pX))
    {
       console.log("same height2")
    }
    if(((posY+kY-cHeight/20)<=plats[5].pY&&posY+kY>=((plats[5].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[5].pX+plats[5].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[5].pX))
    {
       console.log("same height3")
    }
    if(((posY+kY-cHeight/20)<=plats[4].pY&&posY+kY>=((plats[4].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[4].pX+plats[4].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[4].pX))
    {
       console.log("same height4")
    }
    if(((posY+kY-cHeight/20)<=plats[3].pY&&posY+kY>=((plats[3].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[3].pX+plats[3].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[3].pX))
    {
       console.log("same height5")
    }
    if(((posY+kY-cHeight/20)<=plats[2].pY&&posY+kY>=((plats[2].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[2].pX+plats[2].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[2].pX))
    {
       console.log("same height6")
    }
    if(((posY+kY-cHeight/20)<=plats[1].pY&&posY+kY>=((plats[1].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[1].pX+plats[1].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[1].pX))
    {
       console.log("same height7")
    }
    if(((posY+kY-cHeight/20)<=plats[0].pY&&posY+kY>=((plats[0].pY)+cHeight/30))&&((posX+kX+(kikiSprite.width/2)<=plats[0].pX+plats[0].Wi)&&posX+kX+(kikiSprite.width/2)>=plats[0].pX))
    {
       console.log("same height8")
    }

}

//Eventos que controlan el movimiento y algunas mecánicas del juego 
document.querySelector("body").addEventListener("keydown", (event)=>{
    if(event.key==="A"||event.key==="a"||event.key==="ArrowLeft")
    {
        if((posX+kX)>0)
        {
            kX-=40;
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
            kX+=40;
        }
        else
        {
            posX=0;
            kX=0;
        }
    }
    if(event.key==="W"||event.key==="w"||event.key==="ArrowUp")
    {
        if((posY+kY)>10)
        {
            kY-=1;
        }
    }
    if(event.key==="S"||event.key==="s"||event.key==="ArrowDown")
    {
        if((posY+kY)<cHeight)
        {
            kY+=1;
        }
    }
})