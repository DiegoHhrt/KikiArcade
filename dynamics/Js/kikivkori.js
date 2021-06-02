window.addEventListener('load', ()=>{
    let jugar = document.getElementById("play");
    let controles = document.getElementById("controles");
    let pantalla = document.getElementById("pantallaJuego");

    let jugando = false;
    let barril = false;
    let fin = false;
    let accion = false;
    let puntos = 0;
    let salto = false;

    class Barril{
      constructor(X, Y) {
        this.posicionX = X;
        this.posicionY = Y;
        this.dirrecion = 0;
      }

      avanzar(){
        if(this.posicionY < 90)
        {
          if(this.dirrecion == 0)
          {
            this.posicionX += 1;
            this.posicionY += 0.05;
          }
          else
          {
            this.posicionX -= 1;
            this.posicionY += 0.05;
          }
        }
      }

      caer(){
        if(this.posicionY < 90)
        {
          if(this.dirrecion == 0)
          {
            this.posicionY += 16;
          }
          else{
            this.posicionY += 16;
          }
        }
      }
    }


    function logicaBaril()
    {
      //console.log("entro");
      if(barril === false)
      {
        console.log("entro");
        for(let i=0; i<nivel; i++)
        {
          barriles = new Array();
          barriles[i] = new Barril(5+i,0);
          pantalla.innerHTML += "<img src='../statics/Images/barril.png' class='barril' id='barril"+i+"'>";
        }
        console.log(barriles);
        barril = true;
      }
      else
      {
        for(let i=0; i<nivel; i++)
        {
          if(barriles[i].posicionX <= posicionX+5 && barriles[i].posicionX >= posicionX-5)
          {
            if(barriles[i].posicionY <= (100-posicionY+5) && barriles[i].posicionY >= (100-posicionY-5))
            {
              jugando = false;
              pantalla.innerHTML = "<h1 id='perdiste'>Perdiste<h1><h1 id='resultados'>Puntaje:"+puntos+"<h1>";
              clearInterval();
            }
          }
          if(barriles[i].posicionX < 90 && barriles[i].dirrecion == 0)
          {
            barriles[i].avanzar();
          }
          else if(barriles[i].posicionX >= 90 || barriles[i].posicionX <= 0)
          {
            barriles[i].caer();
            if(barriles[i].posicionX == 90)
            {
              barriles[i].posicionX = 89;
              barriles[i].dirrecion = 1;
            }
            if(barriles[i].posicionX == 0)
            {
              barriles[i].posicionX = 5;
              barriles[i].dirrecion = 0;
            }
          }
          else if(barriles[i].posicionX > 0 && barriles[i].dirrecion == 1)
          {
            barriles[i].avanzar();
          }
          document.querySelector("#barril"+i).style.left = barriles[i].posicionX + "%";
          document.querySelector("#barril"+i).style.top = barriles[i].posicionY + "%";
          console.log(barriles[i].posicionX);
          console.log("X:"+posicionX);
          console.log(barriles[i].posicionY);
          console.log("Y:"+posicionY);
          if(barriles[i].posicionY > 90)
          {
            barril = false;
          }
        }
      }
    }

    jugar.addEventListener("click", ()=>{
      new Promise((resolve)=>
      {
        pantalla.innerHTML = "";
        nivel = 1;
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
        pantalla.innerHTML += "<img src='../statics/Images/kori.jpeg' id='kori'>";
        pantalla.innerHTML += "<h2 id='puntaje'>Puntos:"+puntos+"</h2>";
        resolve();
      }).then(()=>{
        jugando = true;
      })
    })

    document.querySelector("body").addEventListener("keydown", (e)=>{
      let kiki = document.getElementById("kiki");
      posicionX = kiki.style.left;
      posicionY = kiki.style.bottom;
      console.log("entro");
      if(posicionX.indexOf("%") != -1)
      {
        valor = posicionX.split("%");
        posicionX = parseInt(valor[0]);
      }
      if(posicionY.indexOf("%") != -1)
      {
        valor = posicionY.split("%");
        posicionY = parseFloat(valor[0]);
        //console.log(posicionY);
      }
      if(e.key == "d" && salto == false)
      {
        posicionX += 1;
        if(posicionY != 0)
        {
          posicionY = posicionY + 0.05;
          kiki.style.bottom = posicionY + "%";
        }
        if(posicionX < 100)
        {
          kiki.style.left = posicionX + "%";
        }
      }
      else if(e.key == "a" && salto == false)
      {
        posicionX -= 1;
        if(posicionY != 0)
        {
          posicionY = posicionY + 0.05;
          kiki.style.bottom = posicionY + "%";
        }
        if(posicionX > -1)
        {
          kiki.style.left = posicionX + "%";
        }
      }
      else if(e.key == " ")
      {
        if(posicionX < 5 || posicionX > 95)
        {
          if(posicionX < 5 && (posicionY != 0 && posicionY != 20 && posicionY != 40))
          {
            posicionY += 15;
          }
          if(posicionX > 95 && (posicionY != 10 && posicionY != 30 && posicionY != 50))
          {
            if(posicionY == 0)
            {
              posicionY += 10;
            }
            else
            {
              posicionY += 15; 
            }
          }
          kiki.style.bottom = posicionY + "%";
          puntos += 100;
          puntaje = document.getElementById("puntaje");
          puntaje.innerText = "Puntos:" + puntos;
        }
        if(posicionY >= 80)
        {
          kiki.style.left = "0%";
          kiki.style.bottom = "0%";
          barril = false;
          puntos += 500;
          puntaje = document.getElementById("puntaje");
          puntaje.innerText = "Puntos:" + puntos;
        }
        else if((posicionX > 10 && posicionX < 80) && posicionY != 0)
        {
          kiki.style.bottom = (posicionY + 12) + "%"
          salto = true;
          setTimeout(()=>{
            kiki.style.bottom = posicionY + "%";
            salto = false;
          },1000)
        }
      }
      if(jugando === true)
      {
        if(accion === false)
        {
          setInterval(logicaBaril, 50);
          accion = true;
        }
      }
    })

    controles.addEventListener("click", ()=>{
      pantalla.innerHTML = "<h1>Usar A y D para moverse y espacio para saltar</h1>";
      pantalla.innerHTML += "<br><h1>Kiki solo puede cambiar de plataforma estado la final de las mismas</h1>";
      pantalla.innerHTML += "<br><h1>Kiki puede saltar los barriles</h1>";
      pantalla.innerHTML += "<br><h1>AL cambiar de plataforma se te sumaran 100 pts y al llegar al final 500pts</h1>";
      pantalla.innerHTML += "<br><h1>Al llegar al final kiki regresara a la posicion incial pero se te sumaran los puntos</h1>";
    })


})