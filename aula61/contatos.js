import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos: ()=>{
        return contatos
    },
    getContato: (i_cont)=>{
        return contatos[i_cont]
    },
    addContato: function(novoContato,destinoDOM){
        const cont = {

            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email,
            id: novoContato.id
        }
        contatos.push(cont)
        destinoDOM.innerHTML = ""
        contatos.forEach((c)=>{
            const div = document.createElement("div")
            div.setAttribute("class","contato")
            div.setAttribute("id",cont.id)
            const p_nome = document.createElement("p")
            p_nome.innerHTML = c.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = c.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML = c.email
            const lixeira = document.createElement("button")
            lixeira.style.width = "50px"
            lixeira.setAttribute("class","btn_remover")
            lixeira.innerHTML = "<img src='lixeira.png' style='width:20px'>"
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(lixeira)
            destinoDOM.appendChild(div) 
        })
        


        
    
    },

    removerContato: (div)=>{
        const id = div.id
        div.remove()
        const index = contatos.findIndex((el)=>{
            if (el.id == id){
                return el
            }
        })

        contatos.splice(index,1)
    



    }
}


export default contato