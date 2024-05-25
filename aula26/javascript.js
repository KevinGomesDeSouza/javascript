const container1 = document.querySelector('#container1')
const elementos = [...document.querySelectorAll('.curso')]
container1.addEventListener ('click', (evento)=>{
    console.log (evento)
})

elementos.map ((el)=>{
    el.addEventListener ('click', (evt)=> {
        evt.stopPropagation ()
    })
})
