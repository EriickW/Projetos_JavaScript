const menu = document.querySelector("#menu")
const body = document.querySelector("body")


menu.addEventListener("click", ()=>{
    body.classList.toggle("menu-expanded")
})