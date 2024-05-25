const b1 = document.getElementById ("b1")
const b2 = document.getElementById ("b2")
var b3 = document.getElementById ("b3")
const Botão = document.getElementById ("botão")
const array = document.getElementById ("array")

const elementosArray = [10,5,8,2,9,15,20]

array.innerHTML = elementosArray

Botão.addEventListener ("click", ()=>{
    document.getElementById ("CaixaDeTexto")
    elementosArray.find((el,i)=>{ 
        if (el == CaixaDeTexto.value) {
            b3.innerHTML = "Valor pesquisado " + el + " na posição " + i
            return el
        }
        else {
            b3.innerHTML = "Valor inválido"
        }
        
        
    })
})