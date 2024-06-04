const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")



const info = (el)=>{
let DOMrect_q = el.getBoundingClientRect()
posx.innerHTML = `posx: ${DOMrect_q.x}`
posy.innerHTML = `posx: ${DOMrect_q.y}`
largura.innerHTML = `posx: ${DOMrect_q.width}`
altura.innerHTML = `posx: ${DOMrect_q.height}`
}

q1.addEventListener("click",(evt)=>{
    info(evt.target)
})

q2.addEventListener("click",(evt)=>{
    info(evt.target)
})

