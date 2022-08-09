const img = document.querySelector("img")
const ligar = document.querySelector("#ligar")
const desligar = document.querySelector("#desligar")

ligar.addEventListener("click" ,()=>{
    img.setAttribute("src","src/img/ligada.jpg")
})
desligar.addEventListener("click" ,()=>{
    img.setAttribute("src","src/img/desligada.jpg")
})