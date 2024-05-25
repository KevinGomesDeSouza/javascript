const Pessoa = {
    nome,
    idade,
    GetNome:function (){
        const div = document.createElement ("div")
        div.innerHTML = `Nome: ${this.nome.value}`
        const resultado = document.querySelector ("#resultado")
        resultado.appendChild (div)
        this.nome.value = ""
        this.nome.focus()

    },
    GetIdade:function (){
        const div = document.createElement ("div")
        div.innerHTML = `Idade: ${this.idade.value}`
        const resultado = document.querySelector ("#resultado")
        resultado.appendChild (div)
        this.idade.value = ""

    },
    setNome:function (){
        this.nome = document.querySelector ("#nome")
    },
    setIdade:function (){
        this.idade = document.querySelector ("#idade")
    },
    AtivarBotao: (function (){
        const botão = document.querySelector ("#botao")
        botão.addEventListener ("click", (evt)=>{
            Pessoa.setNome()
            Pessoa.setIdade()
            Pessoa.GetNome()
            Pessoa.GetIdade ()
            
            
        
        
        
        })
    })()
}

// Pessoa.AtivarBotao()
//Pegando o botão adicionar
// const botão = document.querySelector ("#botao")
// //Adicionando o gatilho
// botão.addEventListener ("click", (evt)=>{
//     Pessoa.setNome()
//     Pessoa.setIdade()
//     Pessoa.GetNome()
//     Pessoa.GetIdade ()
    
    



// })