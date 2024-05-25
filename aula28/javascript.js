var container1 = document.querySelector('#container1')
const elementos = [...document.querySelectorAll('.curso')]
const novoElemento = document.createElement('div')
container1.appendChild (novoElemento)
novoElemento.innerHTML = 'React Native'
novoElemento.setAttribute("id","c7")
novoElemento.classList.add('curso', 'c1')



array = ["HTML","CSS","javascript","PHP","React","MySQL","React Native"]

array.map((element,id) => {
    id++
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute ("id","c" + id)
    novoElemento.setAttribute ("class","curso c1")
    container1.appendChild (novoElemento)
    novoElemento.innerHTML = element
}); 