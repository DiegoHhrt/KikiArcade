window.addEventListener('load', ()=>{
    let jugar = document.getElementById("play");
    let controles = document.getElementById("controles");
    let pantalla = document.getElementById("pantallaJuego");

    let jugando = false;

    jugar.addEventListener("click", ()=>{
      jugando = true;
      pantalla.innerHTML = "";
      for(let i=0; i<5; i++)
      {
        if(i%2 == 0)
        {
          pantalla.innerHTML += "<img src='../statics/Images/rampaIzDe.png' class='rampa'>";
        }
        else
        {
          pantalla.innerHTML += "<img src='../statics/Images/rampaDeiz.png' class='rampa'>";
        }
      }
      pantalla.innerHTML += "<img src='../statics/Images/kikiSpriteV1.png' id='kiki'>";
    })

    document.querySelector("body").addEventListener("keydown", (e)=>{
      console.log(e.key);
      if(jugando === true)
      {
        let kiki = document.getElementById("kiki");
        let posicionX = kiki.style.left;
        let posicionY = kiki.style.bottom;
        if(e.key == "d")
        {
          if(posicionX.indexOf("%") != -1)
          {
            valor = posicionX.split("%");
            posicionX = parseInt(valor[0]);
            console.log(valor);
          }
          posicionX += 10;
          console.log(posicionX);
          if(posicionX < 100)
          {
            kiki.style.left = posicionX + "%";
          }
        }
        else if(e.key == "a")
        {
          if(posicionX.indexOf("%") != -1)
          {
            valor = posicionX.split("%");
            posicionX = parseInt(valor[0]);
            console.log(valor);
          }
          posicionX -= 10;
          console.log(posicionX);
          if(posicionX > -1)
          {
            kiki.style.left = posicionX + "%";
          }
        }
        else if(e.key == " ")
        {
          if(posicionY.indexOf("%") != -1)
          {
            valor = posicionY.split("%");
            posicionY = parseInt(valor[0]);
            console.log(valor);
          }
          posicionY += 10;
          console.log(posicionY);
          kiki.style.bottom = posicionY + "%";
        }
      }
    })

    controles.addEventListener("click", ()=>{
        /*el juego*/
      })


})