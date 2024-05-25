const b1 = document.getElementById ("b1")
const b2 = document.getElementById ("b2")
var b3 = document.getElementById ("b3")
const Botão = document.getElementById ("botão")
const array = document.getElementById ("array")

const elementosArray = [100,55,84,33,23,23,23]

array.innerHTML = elementosArray

Botão.addEventListener ("click", (evt)=>{
 const a = elementosArray.every ((el,i)=>{
    if (el<18){
        b3.innerHTML = "Array não conforme na posição " + i
    }
    return el>=18

  })
  if(a){
    b3.innerHTML = "OK"
  }

  
    })