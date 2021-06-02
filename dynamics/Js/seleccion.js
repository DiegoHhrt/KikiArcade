nombre = document.getElementById("nombre");
color1 = document.getElementById("rojo");
color2 = document.getElementById("azul");
validacion = document.getElementsByClassName("invalid-feedback")
//genera cookies de color y nombre
nombre.addEventListener("change", () => {
  document.cookie = "nombre=" + nombre.value;
  if(nombre.value.length>0){
    nombre.classList.add("is-valid")
    nombre.classList.remove("is-invalid")
  }
  else{
    nombre.classList.add("is-invalid")
    nombre.classList.remove("is-valid")
  }
});
color1.addEventListener("click", () => {
  document.cookie = "pantalla=rojo";
});
color2.addEventListener("click", () => {
  document.cookie = "pantalla=azul";
});
