const todosCursos = [...document.querySelectorAll ('.curso')]
const botão = document.querySelector ('#botão')
const container2 = document.querySelector ('#container2')
var array = []

todosCursos.map ((el) => {
    el.addEventListener('click', GuardarCurso)
})

function GuardarCurso (el) {
    el.target.classList.toggle ('destaque')
    
    // let verdadeoufalso = array.findIndex ((elemento)=> {
    //      return elemento == el.target; 
            
            
    // })

 
    // if (verdadeoufalso == -1) {
    //     array.push (el.target)
    // }
    // else {
    //     array.splice(verdadeoufalso,1) 
    // }
    

}

botão.addEventListener ('click',(el)=> {
    // const container2 = document.querySelector ('#container2')
    // let array2 = [...container2.children]
    const container = document.getElementById ('container1')

    const CursosSelecionados = [...document.getElementsByClassName('destaque')]
    const CursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.destaque)")]
    CursosSelecionados.map ((el)=> {
        container2.appendChild (el)
    })
    CursosNaoSelecionados.map ((el)=> {
        container.appendChild (el)
    })
    



    // PassarItens()     
    // function PassarItens(){
//         array.map ((el)=>{
//             let verdadeFalso = array2.some ((el2)=>{
//                 return el2.innerHTML == el.innerHTML
//             })

//         if (verdadeFalso == true){
//             el.classList.toggle ('destaque')
//             container.appendChild (el)
//             let index = array.findIndex((el3)=>{
//                 return el3 == el
//             })
//             array.splice(index,1)
                
//         }
//         else{container2.appendChild(el)
//             el.classList.toggle ('destaque')
//             let index = array.findIndex((el4)=>{
//                 return el4 == el 
//             })
//             array.splice(index,1)
//         }
//         PassarItens()


            
//     })
// }

    
})
