function Pessoa(pnome,pidade) {
    this.nome = pnome
    this.idade = pidade

    this.getNome = function (){
        return this.nome
        
    }
    this.getIdade = function  (){
        return this.idade
    }
    this.setNome = function  (nome) {
        this.nome = nome
    }
    this.setIdade = function  (idade) {
        this.idade = idade
    }

    this.info = function  () {
        console.log (`Nome: ${this.nome}`)
        console.log (`Nome: ${this.idade}`)

    }

    this.adicionar = function (){
        res.innerHTML = ""
        pessoas.map ((p)=>{
            const div = document.createElement ("div")
            div.setAttribute ("class", "pessoa")
            div.innerHTML = `Nome: ${p.getNome()}<br/>Idade:${p.getIdade()}`
            res.appendChild(div)

        })
    }
}
let pessoas = []
const botão = document.querySelector ("#botao")
const res = document.querySelector ("#resultado")

console.log (botão,res)

botão.addEventListener ("click",(evt)=>{
    const nome = document.querySelector ("#nome")
    const idade = document.querySelector ("#idade")
    const p = new Pessoa (nome.value, idade.value)
    pessoas.push (p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    console.log (pessoas)
    p.adicionar()
    

    

})







