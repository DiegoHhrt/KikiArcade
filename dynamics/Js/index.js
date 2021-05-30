color1 = document.getElementById("rojo")
color2 = document.getElementById("azul")
fondo =document.getElementById("body")
let p;
a=document.getElementsByTagName("A")
desplegable=document.getElementsByClassName("nav-link")
boton =document.getElementById("boton")


color1.addEventListener("click", ()=>{
    titulo.style.color="#0704A9"
    fondo.style.color="#0704A9"
    a[0].style.color="#0704A9"
    for(let i=0; i< desplegable.length; i++){
        desplegable[i].style.color="#0704A9"
    }
    boton.style.backgroundColor="#0704A9";
    fondo.style.backgroundColor=" #AC0404"
    p=document.cookie="pantalla=rojo"
    galleta=p.split("=")
    console.log(galleta)
})

color2.addEventListener("click", ()=>{
    titulo.style.color="#D20404"
    a[0].style.color="#D20404"
    for(let i=0; i< desplegable.length; i++){
    desplegable[i].style.color="#D20404"
    }
    boton.style.backgroundColor="#D20404"
    fondo.style.backgroundColor=" #050368"
    fondo.style.color="#D20404"
    p=document.cookie="pantalla=azul"
    galleta=p.split("=")
    console.log(galleta)
})
if(galleta=="rojo"){
    titulo.style.color="#0704A9"
    fondo.style.color="#0704A9"
    a[0].style.color="#0704A9"
    for(let i=0; i< desplegable.length; i++){
        desplegable[i].style.color="#0704A9"
    }
    boton.style.backgroundColor="#0704A9";
    fondo.style.backgroundColor=" #AC0404"
    p=document.cookie="pantalla=rojo"
    galleta=p.split("=")
    console.log(galleta)
}
if(galleta=="azul"){
    titulo.style.color="#D20404"
    a[0].style.color="#D20404"
    for(let i=0; i< desplegable.length; i++){
    desplegable[i].style.color="#D20404"
    }
    boton.style.backgroundColor="#D20404"
    fondo.style.backgroundColor=" #050368"
    fondo.style.color="#D20404"
    p=document.cookie="pantalla=azul"
    galleta=p.split("=")
    console.log(galleta)
}
 
