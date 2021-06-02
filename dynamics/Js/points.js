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
var jumpDisplay=document.getElementById("jump");
var kikivkori = document.getElementById("kVKori");
var div = document.createElement("div");
jumpDisplay.append(div);
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
    if(decompose&&decompose.length>=3)
    {
        user.push(decompose[0]);
        separate=decompose[1].split("=");
        points.push(separate[1]);
        if(decompose[2]==" Jump")
        {
            game.push("Kiki Jump:")
        }
        else if(decompose[2] ==" KivKo")
        {
            game.push("Kiki vs Kori");
        }
    }
    maxDisplay++;
}

for(i=0;i<15;i++)
{
    if(user[i]&&game[i]&&points[i])
    {
        let jump=document.querySelector("#jump")
        jump.innerHTML+="<br><br>"
        jump.innerText+=game[i]+" "+user[i]+":"+points[i]+" puntos";
        //jumpDisplay.prepend(toAdd);
    }
    else
    {
        let jump=document.querySelector("#jump")
        jump.innerHTML+="<br><br>"
        jump.innerText+="Sin puntaje";
        //jumpDisplay.prepend(toAdd);
    }
}