import { Cxmsg } from "../aula80 versão 3/cx.js"
document.head.innerHTML += "<link rel='stylesheet' href='../aula80 versão 3/cx.css'>"
const timer = document.getElementById("timer")
const btn_iniciar = document.getElementById("btn_iniciar")
const btn_parcial = document.getElementById("btn_parcial")
const btn_parar = document.getElementById("btn_parar")
const btn_zerar = document.getElementById("btn_zerar")
const div_parciais = document.getElementById("div_parciais")

let intervalo = null

let tmpini = null
const contador = ()=>{
    const tmpatual = Date.now()
    let cont= tmpatual - tmpini
    let seg = (tmpatual-tmpini)/1000
    timer.innerHTML = converter(seg)
}

const converter=(seg)=>{
    const hora = Math.floor(seg/3600)
    const resto = seg%3600  
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const form = (hora<10?"0"+hora:hora)+":"+(minuto<10?"0"+minuto:minuto)+":"+(segundo<10?"0"+segundo:segundo)
    return form 
}


btn_iniciar.addEventListener("click",()=>{
    tmpini = Date.now()
    intervalo = setInterval(contador,1000)
})

btn_parar.addEventListener("click",()=>{
    clearInterval(intervalo)
    
})

btn_zerar.addEventListener("click",()=>{
    timer.innerHTML = "00:00:00"
    clearInterval(intervalo)
    div_parciais.replaceChildren()
    Cxmsg.mostrar("Cronômetro","Cronômetro zerado")
    
})

btn_parcial.addEventListener("click",()=>{
    const div_parcial = document.createElement("div")
    div_parcial.innerHTML = timer.innerHTML
    div_parciais.appendChild(div_parcial)


})