nombre =document.getElementById("nombre")
color1 = document.getElementById("rojo")
color2 = document.getElementById("azul")

nombre.addEventListener("change", ()=>{
    document.cookie='nombre='+nombre.value;
})
color1.addEventListener("click", ()=>{
    document.cookie="pantalla=rojo"
})
color2.addEventListener("click", ()=>{
    document.cookie='pantalla=azul';
})
