var can = document.getElementById("pantalla");
var cont = can.getContext("2d");
var cWidth=can.width, cHeight=can.height, kX=0, kY=0, posX=0, posY=cHeight, coordXinit=cWidth/2;


class platform{
    constructor(x, y, w, h, platform)
    {
        this.pX=x;
        this.pY=y;
        this.W=w;
        this.H=h;
        this.path=platform;
    }
    generatePlatform()
    {
        let ruta="";
        if(this.platform==1)
        {
            ruta="../statics/Images/pGreen.png";
        }
        if(this.platform==2)
        {
            ruta="../statics/Images/pPurple.png";
        }
        if(this.platform==3)
        {
            ruta="../statics/Images/pRed.png";
        }
        if(this.platform==4)
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

var kikiSprite=new Image();
kikiSprite.height=cWidth/8;
kikiSprite.width=cWidth/8

kikiSprite.src = "../statics/Images/kikiSpriteV1.png";



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
})