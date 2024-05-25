class Carro {
    constructor (nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar=function (){
        this.ligado = true
    }
    desligar=function (){
        this.ligado = false
    }
    setCor=function (cor){
        this.cor = cor
    }
    
}

class Militar extends Carro{
    constructor (gelo, pedra,blindagem,municao) {
        super (gelo, pedra)
        this.blindagem = blindagem
        this.municao = municao
    }

    atirar = function () {
        if (this.municao>0) {
            this.municao --
            console.log ("Bang")
        }
    }



}

const c1 = new Carro("Normal", 4)
c1.ligar()
c1.setCor("Preto")

const c2 = new Militar ("Lutador",1,100,50)
c2.setCor ("verde")

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado?`sim`:`não`}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log ("---------------------------------------")
console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado?`sim`:`não`}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
c2.atirar()
console.log(`Munição: ${c2.municao}`)
console.log ("---------------------------------------")
