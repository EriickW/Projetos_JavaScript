const botao = document.querySelector("button")
const textColor = document.querySelector("p")
const body = document.querySelector("body")


botao.addEventListener("click", () => {
    let cor = corAleatoria()
    body.style.backgroundColor = cor
    textColor.innerText = cor
})


function corAleatoria(){
    let hexadecimal = "#"
    let caracters = "0123456789ABCDEF"
    let caractersArray = caracters.split("")
    let numeroAleatorio=0;
    for(let i = 0;i < 6; i++){
        numeroAleatorio = Math.floor(Math.random() * 16)
        hexadecimal = hexadecimal+caractersArray[numeroAleatorio]
    }
    return hexadecimal
}
