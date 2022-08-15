const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const avancar = document.querySelector("#avançar")
const voltar = document.querySelector("#voltar")
const castelo = document.querySelector("#castelo")
const cidade1 = document.querySelector("#cidade1")
const cidade2 = document.querySelector("#cidade2")
const circle = document.getElementsByClassName("circle")
//========= menu =====================
menu.addEventListener("click", ()=>{
    body.classList.toggle("menu-expanded")
    if(menu.getAttribute("name") == "Menu"){
        menu.removeAttribute("name")
        menu.setAttribute("name","close-outline")
    }else{
        menu.removeAttribute("name")
        menu.setAttribute("name","Menu")
    }
})
//======================================

//========= navigation ===========
avancar.addEventListener("click", ()=>{

     if(castelo.classList == "secContent active"){
        console.log(true)
            castelo.classList.remove("active")
            cidade1.classList.add("active")
            circle[0].classList.remove("active")
            circle[1].classList.add("active")
        } else if(cidade1.classList == "secContent active"){
            console.log(true)
                cidade1.classList.remove("active")
                cidade2.classList.add("active")
                circle[1].classList.remove("active")
            circle[2].classList.add("active")
            }else if(cidade2.classList == "secContent active"){
                console.log(true)
                    cidade2.classList.remove("active")
                    castelo.classList.add("active")
                    circle[2].classList.remove("active")
                    circle[0].classList.add("active")
            } 
})
voltar.addEventListener("click", ()=>{

    if(castelo.classList == "secContent active"){
            console.log(true)
            castelo .classList.remove("active")
            cidade2.classList.add("active")
            circle[0].classList.remove("active")
            circle[2].classList.add("active")
       }else if(cidade2.classList == "secContent active"){
           console.log(true)
               cidade2.classList.remove("active")
               cidade1.classList.add("active")
               circle[2].classList.remove("active")
               circle[1].classList.add("active")
           }else if(cidade1.classList == "secContent active"){
               console.log(true)
               cidade1.classList.remove("active")
               castelo.classList.add("active")
               circle[1].classList.remove("active")
               circle[0].classList.add("active")

           } 
})