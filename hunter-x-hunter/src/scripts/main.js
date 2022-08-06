//========================================================Consts====================================================

const body = document.querySelector("body");
const historia = document.querySelector("#historia");
const nome = document.querySelector("#nome");
const tipo = document.querySelector("#tipo");
const img = document.querySelector("#personagemImg");
const habilidades = document.querySelector("#abilities");
const video = document.querySelector("#video")
const gon = document.querySelector("#gon");
const killua = document.querySelector("#killua");
const kurapika = document.querySelector("#kurapika")
// ===================================================Imports========================================================
import Personagens from "./personagensPrincipais.js";






// =======================================================Events=================================================
gon.addEventListener("click", () =>{
    historia.innerText = Personagens[0].historia
    nome.innerText = Personagens[0].name
    tipo.innerText = Personagens[0].tipoNem
    video.innerHTML = Personagens[0].video
    habilidades.innerText = Personagens[0].habilidades
    img.setAttribute ( 'src' , Personagens[0].foto)
 
    if(body.classList != " "){
        body.removeAttribute('class')
        body.classList.add("gon") 
    }else{
        body.classList.add = "gon"
    }
    
})

killua.addEventListener("click", () =>{
    historia.innerText = Personagens[1].historia
    video.innerHTML = Personagens[1].video
    nome.innerText = Personagens[1].name
    tipo.innerText = Personagens[1].tipoNem
    habilidades.innerText = Personagens[1].habilidades
    img.setAttribute ( 'src' ,Personagens[1].foto)
 
    if(body.classList != " "){
        body.removeAttribute('class')
        body.classList.add("killua") 
    }else{
        body.classList.add("killua")
    }
    
})
kurapika.addEventListener("click", () =>{
    historia.innerText = Personagens[2].historia
    video.innerHTML = Personagens[2].video
    nome.innerText = Personagens[2].name
    tipo.innerText = Personagens[2].tipoNem
    habilidades.innerText = Personagens[2].habilidades
    img.setAttribute ( 'src' ,Personagens[2].foto)
 
    if(body.classList != " "){
        body.removeAttribute('class')
        body.classList.add("kurapika") 
    }else{
        body.classList.add("kurapika")
    }
    
})
