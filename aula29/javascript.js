var container1 = document.querySelector('#container1')
const elementos = [...document.querySelectorAll('.curso')]
const novoElemento = document.createElement('div')
container1.appendChild (novoElemento)




array = ["HTML","CSS","javascript","PHP","React","MySQL","React Native"]

array.map((element,id) => {
    id++
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute ("id","c" + id)
    novoElemento.setAttribute ("class","curso c1")
    container1.appendChild (novoElemento)
    novoElemento.innerHTML = element
    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute ('src', './54324.png')
    btn_lixeira.classList.add ('btn_lixeira')
    novoElemento.appendChild (btn_lixeira)
    btn_lixeira.addEventListener ("click", (evt)=>{
        console.log (evt.target)
        container1.removeChild (evt.target.parentNode)
    })
    
}); 

