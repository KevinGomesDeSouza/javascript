const b1 = document.getElementById ("b1")
const b2 = document.getElementById ("b2")
var b3 = document.getElementById ("b3")
const Botão = document.getElementById ("botão")
const array = document.getElementById ("array")

const elementosArray = [1,2,3,4,5]



let ant = []
let atu = []
let dobro = []

array.innerHTML = elementosArray

Botão.addEventListener ("click", (evt)=>{
  dobro.push (elementosArray [0]*2)
  b3.innerHTML = elementosArray.reduce ((anterior,atual,indice)=> {
    ant.push (anterior)
    atu.push (atual)
    dobro.push (atual*2)
    return anterior + atual
  })
  b3.innerHTML += "<br>Anterior: " + ant + "</br>" + "Atual: "+ atu + "<br>Dobro: " + dobro + "</br>"

  
    })


  