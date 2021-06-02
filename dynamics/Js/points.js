//Se manejan cookies existentes
function cookieName (name, display=false) 
{
    let cookies = document.cookie;
    let cookieArray = cookies.split("; ");
    for (let value of cookieArray)
    {
        if(!display)
        {
            let cookie=value.split("=");
            if(cookie[0]===name)
            {
                return cookie[1];
            }
        }
        else
        {
            return cookieArray;
        }
    }
    return false;
}
var maxDisplay=0, scores=[], user=[], points=[], game=[];
scores=cookieName(false, true);
//Se controla qué valores dentro de las cookies deben desplegarse
while(maxDisplay<15)
{
    let decompose, separate;
    if(scores[maxDisplay])
    {
        decompose=scores[maxDisplay].split(",");
    }
    if(decompose&&decompose.length>=4)
    {
        user.push(decompose[0]);
        separate=decompose[1].split("=");
        points.push(separate[1]);
        game.push(separate[2]);
    }
    maxDisplay++;
}
            ctx.beginPath();
            ctx.fillStyle="#000000"
            ctx.textAlign="center"
                if(user[0]&&points[0])
                {
                    ctx.fillText(user[0]+":"+points[0], canvas.width/2, (canvas.height/10));
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10));
                }
                if(user[1]&&points[1])
                {
                    ctx.fillText(user[1]+":"+points[1], canvas.width/2, (canvas.height/10)*2);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*2);
                }
                if(user[2]&&points[2])
                {
                    ctx.fillText(user[2]+":"+points[2], canvas.width/2, (canvas.height/10)*3);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*3);
                }
                if(user[3]&&points[3])
                {
                    ctx.fillText(user[3]+":"+points[3], canvas.width/2, (canvas.height/10)*4);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*4);
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
                    ctx.fillText(user[5]+":"+points[5], canvas.width/2, (canvas.height/10)*6);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*6);
                }
                if(user[6]&&points[6])
                {
                    ctx.fillText(user[6]+":"+points[6], canvas.width/2, (canvas.height/10)*7);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*7);
                }
                if(user[7]&&points[7])
                {
                    ctx.fillText(user[7]+":"+points[7], canvas.width/2, (canvas.height/10)*8);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*8);
                }
                if(user[8]&&points[8])
                {
                    ctx.fillText(user[8]+":"+points[8], canvas.width/2, (canvas.height/10)*9);
                }
                else
                {
                    ctx.fillText("Sin puntaje", canvas.width/2, (canvas.height/10)*9);
                }