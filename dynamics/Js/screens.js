class Platform{
    constructor(x, y, w, h, platform)
    {
        this.pX=x;
        this.pY=y;
        this.Wi=w;
        this.He=h;
        this.path=platform;
    }
    generatePlatform()
    {
        let ruta="";
        if(this.path==1)
        {
            ruta="../statics/Images/pGreen.png";
        }
        if(this.path==2)
        {
            ruta="../statics/Images/pPurple.png";
        }
        if(this.path==3)
        {
            ruta="../statics/Images/pRed.png";
        }
        if(this.path==4)
        {
            ruta="../statics/Images/pYellow.png";
        }
        return ruta;
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
var randPosX, randPosY;
var greenP = new Platform(cWidth/2, cHeight/2, cWidth/5, cHeight/10, 3);
var i=0, change=0;


var kikiSprite=new Image(cWidth/8, cWidth/8);
var p1=new Image();

kikiSprite.src = "../statics/Images/kikiSpriteV1.png";
p1.src=greenP.generatePlatform();


function screen1()
{
    cont.clearRect(0,0, cWidth, cHeight);
        cont.beginPath();
            cont.rect(0,0,cWidth,cHeight);
            cont.fillStyle = "#00b4c4";
            cont.fill();
            img(kX,kY);       
        cont.closePath();
}
function img (x, y)
{
    if(i<=numP)
    {
        randPosX=Math.round(Math.random()*20);
        randPosY=Math.round(Math.random()*30);
    }
    i++;
    cont.drawImage(p1, cWidth/randPosX, cHeight/randPosY, greenP.Wi, greenP.He);
    cont.drawImage(p1, greenP.pX, greenP.pY, greenP.Wi, greenP.He);
    cont.drawImage(kikiSprite, posX+x, (posY+y)-kikiSprite.height, cWidth/8, cWidth/8);
    
}
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
            kY-=40;
            console.log(posY, kY)
        }
    }
    if(event.key==="S"||event.key==="s"||event.key==="ArrowDown")
    {
        if((posY+kY)<cHeight)
        {
            kY+=40;
        }
    }
})