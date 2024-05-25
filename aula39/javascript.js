class Carro {
    constructor (nome,ctipo) {
        this.nome = nome
        if (ctipo == 1) {
            this.tipo = "Esportivo"
            this.VelMax = 300
        } 
        else if (ctipo == 2){
            this.tipo = "Utilitário"
            this.VelMax = 100

        }
        else if (ctipo == 3){
            this.tipo = "Passeio"
            this.VelMax = 160

        }
        else {
            this.tipo = "Militar"
            this.VelMax = 180
        }
    } 
    getNome (){
        return this.nome
        
    }
    getTipo (){
        return this.tipo
    }
    VeloMax (){
        return this.VelMax
    
        
    }
    info (){
        console.log (`Nome: ${this.nome}`)
        console.log (`tipo: ${this.tipo}`)
        console.log (`Velocidade máxima: ${this.VelMax}`)

    }

    setNome (nome) {
        this.nome = nome
    }
    setTipo (tipo) {
        this.tipo = tipo
    }
    setVeloMax (VelMax) {
        this.VelMax = VelMax
    }



}

let c1 = new Carro ("Rapidão",1)
let c2 = new Carro ("Taxi",2)
let c3 = new Carro ("March",3)
let c4 = new Carro ("Tanque",4)



// c1.setNome ("cu")
// c1.setTipo ("foof")
// c1.setVeloMax (6)
c1.info()
c2.info()
c3.info ()
