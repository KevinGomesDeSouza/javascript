import c from "./contatos.js";
const listaContatos = document.getElementById("listaContatos")
const btn_gravar = document.getElementById("btn_gravar")


btn_gravar.addEventListener("click",(evt)=>{
    const cont = {
        nome: document.getElementById("i_nome").value,
        telefone: document.getElementById("i_tel").value,
        email: document.getElementById("i_email").value,
        id: Math.random()*1000000
    }
    
    c.addContato(cont,listaContatos)
    
    const btn_remover = [...document.querySelectorAll(".btn_remover")]
    btn_remover.map ((el)=>{
        el.addEventListener("click",(evt)=>{
            const div = el.parentNode
            c.removerContato(div)
        })
    })
    // console.log (c.getTodosContatos())


})

