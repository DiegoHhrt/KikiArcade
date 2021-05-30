class Platform{
    constructor(cW, cH, c)
    {
        this.Wi=cW/5+Math.random();
        this.He=cH/10;
        this.Img=this.platformPath();
        this.pX = Math.round(Math.random()*(cW - this.Wi));
        this.pY = (cH/8)*c;//+this.He;//+ Math.round(Math.random()*(()*c));
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

kikiSprite.src = "../statics/Images/kikiSpriteV1.png";

var pPurple=new Image();
var pYellow=new Image();
var pRed=new Image();
var pGreen=new Image();
loadImg();
generatePl();
function loadImg () {
    pPurple.src="../statics/Images/pPurple.png";
    pYellow.src="../statics/Images/pYellow.png";
    pRed.src="../statics/Images/pRed.png";
    pGreen.src="../statics/Images/pGreen.png";
}

function generatePl()
{
    let c=0;
    while(plats.length<8)
    {
        plats.push(new Platform(cWidth, cHeight, c));
        ++c;
    }

}

function screen1()
{
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