const BotaoCursoSelecionado = document.getElementById ('cursoselecionado')
const BotaoRemoverSelec = document.querySelector ("input[value='Remover Selecionado']")
const BotaoAddAntes = document.querySelector ("input[value='Adicionar Antes']")
const BotaoAddDepois = document.querySelector ("input[value='Adicionar Depois']")


function cursoselecionado () {
    const todosradio = [...document.querySelectorAll ('input[type=radio]')]
    const radio = todosradio.filter ((el)=>{
        return el.checked
    })

    return radio [0]
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
        window.alert('Curso selecionado: ' +p.previousElementSibling.textContent)
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
        const curso = p.parentElement.cloneNode (true) 
        if (CaixadeTexto.value != '') {
            curso.childNodes [1].textContent = CaixadeTexto.value
            p.parentElement.insertAdjacentElement ('beforebegin',curso)
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
        if (CaixadeTexto.value != '') {
            curso.childNodes [1].textContent = CaixadeTexto.value
            p.parentElement.insertAdjacentElement ('afterend',curso)
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


