class Platform{
    constructor()
    {
        this.pX = Math.round(Math.random()*20);
        this.pY = Math.round(Math.random()*30);
        this.Wi=cWidth/5+Math.random();
        this.He=cHeight/10;
        this.Img=this.platformPath();

    }
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
//var p1=new Image();

kikiSprite.src = "../statics/Images/kikiSpriteV1.png";
//p1.src=greenP.platformPath();

var pPurple=new Image();
var pYellow=new Image();
var pRed=new Image();
var pGreen=new Image();
loadImg();
function loadImg () {
    pPurple.src="../statics/Images/pPurple.png";
    pYellow.src="../statics/Images/pYellow.png";
    pRed.src="../statics/Images/pRed.png";
    pGreen.src="../statics/Images/pGreen.png";
}

function generatePl()
{
    while(plats.length<8)
    {
        plats.push(new Platform());
    }

}

function screen1()
{
    //cont.clearRect(0,0, cWidth, cHeight);
    cont.beginPath();
        cont.rect(0,0,cWidth,cHeight);
        cont.fillStyle = "#00b4c4";
        cont.fill();
        img(kX,kY);       
    cont.closePath();
}
function img (x, y)
{
    //Game platforms
    
    //Kiki img
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