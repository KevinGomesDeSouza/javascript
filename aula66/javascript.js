const carro = document.getElementById("carro")
const btn_esquerdo = document.getElementById("btn_esquerda")
const btn_direito = document.getElementById("btn_direita")
const btn_parar = document.getElementById("btn_parar")
let Body = document.querySelector ("body")
let LarguraBody = Body.offsetWidth



window.addEventListener("resize",()=>{
    LarguraBody = Body.offsetWidth
    
    
})

const init = ()=>{
    carro.style = "position:relative;left:0px"
}

let anima = null

const move = (dir) =>{
    if(parseInt(carro.style.left) + parseInt(carro.offsetWidth) > parseInt(LarguraBody)){
        clearTimeout(anima)
       dir = -1
    }
    else if (parseInt(carro.style.left) < 0){
        clearTimeout(anima)
       dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"

    anima = setTimeout(move,20,dir)

}

btn_parar.addEventListener("click",()=>{
    clearTimeout(anima)
})


btn_esquerdo.addEventListener("click",()=>{
    clearTimeout(anima)
    move(-1)

})

btn_direito.addEventListener("click", ()=>{
    clearTimeout(anima)
    move(1)
    
})

window.onload = init

window.addEventListener("keydown",(evt)=>{
    if(evt.code==="ArrowUp"){
        carro.style.width = parseInt(carro.offsetWidth)+10+"px"
        carro.style.height = parseInt(carro.offsetHeight)+10+"px"
        
    }
     if(evt.code==="ArrowDown"){
        carro.style.width = parseInt(carro.offsetWidth)-10+"px"
        carro.style.height = parseInt(carro.offsetHeight)-10+"px"
    }

})
