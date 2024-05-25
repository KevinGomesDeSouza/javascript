// const f_tipoMilitar = document.querySelector("#tipo")
// const f_tipoNormal = document.querySelector("#tipo2")

const Radios = [...document.querySelectorAll ("input[type=radio]")] 
const blindagemEmunição = [...document.querySelectorAll(".militar")]
const nomeEportas = [...document.querySelectorAll(".nomeEportas")]
const carros = document.getElementById ("carros")
let a_carros = []
const addCarro = document.querySelector ("#botao")



Radios [0].addEventListener ("click",(evt)=>{
    blindagemEmunição.map ((el)=>{
        el.removeAttribute ("disabled")
        el.classList.toggle("militar")
        el.value = 0
        nomeEportas [0].value = ""
        nomeEportas [1].value = 0
        
    })
})

Radios [1].addEventListener ("click",(evt)=>{
    blindagemEmunição.map ((el)=>{
        el.setAttribute ("disabled","disabled") 
        el.classList.toggle("militar")
        el.value = 0
        nomeEportas [0].value = ""
        nomeEportas [1].value = 0
    })
})

const gerenciarExebicaoCarros=()=>{
    carros.innerHTML = ""
    a_carros.map((c)=>{
        const div = document.createElement ("div")
        div.setAttribute("class","carro")
        div.innerHTML = `Nome: ${c.nome}<br>`
        div.innerHTML += `Portas: ${c.portas}<br>`
        div.innerHTML += `Cor: ${c.cor}<br>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br>`
        div.innerHTML += `Munição: ${c.municao}`
        const botãoRemover = document.createElement ("input")
        botãoRemover.setAttribute("type", "button")
        botãoRemover.setAttribute ("class","botao2")
        botãoRemover.value = "Remover"
        carros.appendChild(div)
        div.appendChild(botãoRemover)
    
        botãoRemover.addEventListener ("click",(evt)=>{
            const indice = a_carros.indexOf(c)
            a_carros.splice(indice,1)
            gerenciarExebicaoCarros()

            
        })
        
    })

    
}


addCarro.addEventListener ("click",()=>{
    if (Radios[1].checked){
        const c = new Carro (nomeEportas[0].value,nomeEportas[1].value)
        a_carros.push (c)

    }
    else {
        const c = new Militar (nomeEportas[0].value,nomeEportas[1].value,blindagemEmunição[0].value,blindagemEmunição[1].value)
        a_carros.push (c)
    }
    gerenciarExebicaoCarros()
})



class Carro {
    constructor (nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function(){
        this.ligado = true
    }
    
    desligar = function(){
        this.ligado = false
    }

    setCor = function (cor){
        this.cor = cor
    }
}

class Militar extends Carro {
    constructor(nome,portas,blindagem,municao){
        super (nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
    }

    atirar = function(){
        if (this.municao >0){
            this.municao--
        }
    }
}

const c1 = new Carro ("Normal",4)
c1.ligar()
c1.setCor ("Preto")

const c2 = new Militar ("Lutador ",1,100,50)

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

