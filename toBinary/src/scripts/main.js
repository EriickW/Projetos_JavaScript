const input = document.querySelector("input")
const botao = document.querySelector("button")
const numeroConvertido = document.querySelector("#numeroConvertido")

botao.addEventListener("click",()=>{
    let numero = input.value

    let binary = (numero%2).toString();

    while(numero > 1){
        numero = parseInt(numero /2)
        binary = (numero % 2) + (binary)
    }
    numeroConvertido.innerText = binary
})