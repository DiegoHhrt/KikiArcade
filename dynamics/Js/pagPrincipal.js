card= document.getElementsByClassName("card")
btn= document.getElementsByClassName("btn")
color1 = document.getElementById("rojo")
color2 = document.getElementById("azul")

color1.addEventListener("click", ()=>{
    for(let i=0; i<2; i++){
        card[i].style.background= "#D90000"
        card[i].style.background= "linear-gradient(0deg, #D90000 0%, #CC7004 100%)"
        card[i].style.color= "#000000"
        btn[i].style.backgroundColor="#dc3545"
        btn[i].style.borderColor="#dc3545"
        btn[i].style.color="#000000"
    }
})
color2.addEventListener("click", ()=>{
    for(let i=0; i<2; i++){
        card[i].style.background= "rgba(206,19,199,1)";
        card[i].style.background= "linear-gradient(0deg, rgba(11,7,210,1) 0%, rgba(206,19,199,1) 100%)";
        card[i].style.color= "#FFFFFF"
        btn[i].style.backgroundColor="#007BBF"
        btn[i].style.borderColor="#007BBF"
        btn[i].style.color="#FFFFFF"
    }
})