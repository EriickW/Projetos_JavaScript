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



// ===================================================Personagens=====================================================



const Personagens = [   {
    name:"Gon Freecss",
    historia:"Gon is an athletic, rustic, and friendly boy who is searching for adventure. Also, he is not very good at math. However, having spent a lot of time in the woods as a child, he is very good with animals. Gon is an Enhancer, who are known for being simple-minded and determined. This determination and talent lead to both potential allies and potential enemies trusting in him and taking his side. He has inhuman senses; Gon has a heightened sense of smell almost like a dog's, he also has very good vision, as well as having a very keen taste. Gon wants to become a Hunter because he wishes to find out the depths of an occupation that would cause a father to choose the profession over being with his own son.",
    tipoNem:"Enhancement",
    habilidades:"Jajanken: Rock, Paper, Scissors",
    foto:"src/img/gon.png",
    video:'<iframe width="100%" height="315" src="https://www.youtube.com/embed/KJOfi2vzBRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
},
{
    name:"Killua Zoldyck",
    historia:"Inicialmente, Killua é introduzido como um personagem que parece ser semelhante à Gon, mas diferente, ao mesmo tempo; insolente, alegre e cheio de ideias perversas. Ele também é um dos personagens que pensam mais rápido na série e muitas vezes analisa uma situação com grande facilidade e precisão. Ele tem muita confiança em suas próprias habilidades, muitas vezes, é humilde. No entanto, sua crueldade e aptidão na matança mostra o seu outro lado: mortal, violento e sanguinário. Tendo sido torturado desde o nascimento, Killua foi condicionado a possuir extrema tolerância para veneno, eletricidade e dor. Killua possui extraordinária agilidade e força o que faz dele uma máquina de matar, definitivamente não é para brincadeiras.",
    tipoNem:"Transformação",
    habilidades:"Lightning Palm, Thunderbolt, Godspeed",
    foto:"src/img/killua.png",
    video:'<iframe width="100%" height="315" src="https://www.youtube.com/embed/-nSncL2cgDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
},
{
    name:"Kurapika",
    historia:'Kurapika é um dos quatro protagonistas de Hunter × Hunter. Ele é o último sobrevivente da tribo Kuruta. Membro da tribo Kuruta, um grupo discreto de pessoas que escolheram viver na obscuridade, na província Lukso. Eles possuem olhos que mudam de sua cor natural (geralmente castanhos, segundo Kurapika) para vermelho em momentos de raiva ou agitação emocional, Cinco anos atrás, o grupo Genei Ryodan foi para a cidade natal de Kurapika e assassinaram todos os membros da sua tribo, deixando para trás dezenas de cadáveres com os olhos arrancados. Como último membro sobrevivente de seu clã, Kurapika luta para conseguir de volta todos os olhos roubados de seu povo, perseguindo a Genei Ryodan em busca de vingança, mesmo que ele tenha que sacrificar a sua vida em sua missão. ',
    tipoNem:"Conjuração e especialização",
    habilidades:"Holy Chain, Dowsing Chain, Chain Jail, Judgment Chain, Emperor Time",
    foto:"src/img/kurapika.png",
    video:'<iframe width="100%" height="315" src="https://www.youtube.com/embed/L8JNyfCNCw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
}];


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
