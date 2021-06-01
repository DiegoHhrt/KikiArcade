//extraccion de id y clase
color1 = document.getElementById("rojo")
color2 = document.getElementById("azul")
fondo =document.getElementById("body")
a=document.getElementsByTagName("A")
boton =document.getElementById("boton")
nav=document.getElementsByClassName("navbar")

//función que obtiene las cookies 
function obtenerCookie(nombreCookie){
    let cookies = document.cookie
    let arrCookies= cookies.split(";")
    //extrae las cookies en un arreglo
    for(const valor of arrCookies){
        const cookie= valor.split("=")
        console.log(cookie)
        if(cookie[0]==nombreCookie){
            return cookie[1]
        }
    }
}
//verifica si rojo está almacenado en la cookie para las demás vistas
if(obtenerCookie(" pantalla")=="rojo"){
    fondo.style.background= "D90000"
    fondo.style.background= "linear-gradient(90deg, #D90000 0%, #CC7004 100%)"
    fondo.style.color="#CCFF00"
    a[0].style.color="#CCFF00"
    boton.style.backgroundColor="#CCFF00"
    nav[0].style.backgroundColor="#BF0000"
}
//verifica si azul está almacenado en la cookie para las demás vistas
else{
    fondo.style.background= "#0b07d2"
    fondo.style.background= "linear-gradient(90deg, #0b07d2 0%, #ce13c7 100%)"
    fondo.style.color="#B80202"
    a[0].style.color="#B80202"
    boton.style.backgroundColor="#CE1313"
    nav[0].style.backgroundColor="#110DA8"
}
