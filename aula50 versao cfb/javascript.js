const TeclasNum = [...document.querySelectorAll (".num")]
const TeclasOp = [...document.querySelectorAll (".op")]
const TeclasRes = document.querySelector(".res")
const Display = document.querySelector("#display")
const Ton = document.querySelector ("#ton")
const Tlimpar = document.querySelector ("#tlimpar")
const Tigual = document.getElementById("tigual")
const Tcpy = document.getElementById ("tcpy")
const aba = document.querySelector (".aba")
const principal = document.querySelector(".principal")
const imagem = document.querySelector ("#imagem")

let sinal = false
let decimal = false

TeclasNum.forEach ((el)=>{
    el.addEventListener("click", (evt)=>{
        sinal = false
        if (evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(Display.innerHTML == "0"){
                    Display.innerHTML = "0,"
                }else{
                Display.innerHTML += evt.target.innerHTML
                }
            }
        }else {
            if(Display.innerHTML == "0"){
                Display.innerHTML = ""
            }
            Display.innerHTML += evt.target.innerHTML

        }
    })
})

TeclasOp.forEach ((el)=>{
    el.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal = true
            if(Display.innerHTML == "0"){
            Display.innerHTML = ""
            }
            if (evt.target.innerHTML == "x"){
                Display.innerHTML+= "*"
            }else{
            Display.innerHTML += evt.target.innerHTML
        }
    }

    })
})

Tlimpar.addEventListener ("click", (evt)=>{
    sinal = false
    decimal = false
    Display.innerHTML = "0"
})

Tigual.addEventListener ("click", (evt)=>{
    sinal = false
    decimal = false
    const res = eval(Display.innerHTML)
    Display.innerHTML=res
})

Tcpy.addEventListener ("click", ()=>{
    navigator.clipboard.writeText(Display.innerHTML)
})

aba.addEventListener("click", ()=>{
    principal.classList.toggle("principalExibir")
    imagem.classList.toggle("imagemInvertida")
   
})

