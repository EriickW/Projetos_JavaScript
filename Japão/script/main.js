const menu = document.querySelector("#menu")
const body = document.querySelector("body")


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

console.log()