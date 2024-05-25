const BotaoCursoSelecionado = document.getElementById ('cursoselecionado')
const BotaoRemoverSelec = document.querySelector ("input[value='Remover Selecionado']")
const BotaoAddAntes = document.querySelector ("input[value='Adicionar Antes']")
const BotaoAddDepois = document.querySelector ("input[value='Adicionar Depois']")
const todoscurso = [...document.querySelectorAll ('.curso')]



function cu (){
const todoscurso = [...document.querySelectorAll ('.curso')]
todoscurso.map((el)=>{
    el.addEventListener ('click', (evt)=> {
        const TodosOsCursosSelecionados = [...document.querySelectorAll ('.destaque')]
        TodosOsCursosSelecionados.map ((el)=>{
            el.classList.remove ('destaque')
        })
        evt.target.classList.toggle ("destaque")
        
    })
})
}

cu ()
function cursoselecionado () {
    const CursoSelecionado= document.querySelector ('.destaque')
    return CursoSelecionado

}

function ReColocarID () {
    const TodosOsCursos = [...document.querySelectorAll ('.curso')]
    TodosOsCursos.map ((el,i)=>{
        i++
        el.setAttribute ("id", "c"+ i)
    })}

BotaoCursoSelecionado.addEventListener ('click',(evt)=> {
    const p = cursoselecionado ()
    if (p == null) {
        window.alert ('Selecione um curso')
    }
    else {
        window.alert('Curso selecionado: ' +p.textContent)
    }
})

BotaoRemoverSelec.addEventListener ('click', (evt)=> {
    const p = cursoselecionado ()
    if (p == null) {
        window.alert ('Selecione um curso')
    }
    else {
        p.parentNode.remove ()
        ReColocarID() 
        
    }

    
})

BotaoAddAntes.addEventListener ('click' ,(evt)=> {
    const p = cursoselecionado () 
    const CaixadeTexto = document.querySelector ("input[type=text]") 
    if (p != null){
        var curso = p.parentNode.cloneNode (true) 
        curso.childNodes [1].classList.remove ('destaque')
        if (CaixadeTexto.value != '') {
            curso.childNodes [1].textContent = CaixadeTexto.value
            p.parentElement.insertAdjacentElement ('beforebegin',curso)
            cu ()
            ReColocarID() 
        }
        else {
            window.alert ('Digite um curso')
        }
        
    }
   
    else {
        window.alert ('Selecione um curso')
    }
})


BotaoAddDepois.addEventListener ('click', (evt)=> {
    const p = cursoselecionado ()
    const CaixadeTexto = document.querySelector ("input[type=text]")
    if (p != null){
        const curso = p.parentElement.cloneNode (true) 
        curso.childNodes [1].classList.remove ('destaque')
        if (CaixadeTexto.value != '') {
            curso.childNodes [1].textContent = CaixadeTexto.value
            p.parentElement.insertAdjacentElement ('afterend',curso)
            cu ()
            ReColocarID() 
        }
        else {
            window.alert ('Digite um curso')
        }
        
    }
   
    else {
        window.alert ('Selecione um curso')
    }
  
})


