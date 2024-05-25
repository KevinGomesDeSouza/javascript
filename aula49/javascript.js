  class CarroPadrao {
      constructor(){
      if (this.constructor === CarroPadrao){
        throw new TypeError ("Esta classe não pode ser instanciada")
      }
      if (this.ligar===undefined) {
        throw new TypeError ("É obrigatório implementar o método ligar")
      }
      if (this.desligar===undefined) {
        throw new TypeError ("É obrigatório implementar o método desligar")
      }
      this.rodas = 4
      this.portas = 4
      this.ligado = false

      }
  }
  
  class Carros extends CarroPadrao {
    constructor (tipo, estagioTurbo){
        super()
        this.turbo = new Turbo (estagioTurbo)
        switch (tipo){
            case 1:
                this.velMax = 120
                this.nome = "Normal"
                break
            case 2:
                this.velMax = 160
                this.nome = "Esportivo"
                break
            case 3:
                this.velMax = 200
                this.nome = "Super esportivo"
                break
        }
        this.velMax += this.turbo.pot

    }

    info(){
        console.log (this.nome)
        console.log (this.velMax)
        console.log (this.turbo)
        console.log(this.rodas = 4)
        console.log(this.portas = 4)
        console.log(this.ligado = false)
        console.log ("------------")
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
  }

  class Turbo {
    constructor (e){
        switch(e){
            case 1: 
                this.pot=50
                break
            case 2: 
                this.pot=75
                break
            case 3: 
                this.pot=100    
                break
            case 0:
                this.pot=0
                break
            
        }
    }
  }

  class CarroEspecial extends Carros {
    constructor(estagioTurbo){
        super (4,estagioTurbo)
        this.TipoInfo = 1
        this.velMax = 300 + this.turbo.pot
        this.nome = "Carro especial "
    }
    info (){
        if(this.TipoInfo==1){
            super.info()
        }else{
            console.log (`Nome: ${this.nome}`)
            console.log (`velocidade Máxima: ${this.velMax}`)
            console.log (`Turbo: ${this.turbo}`)
            console.log ("------------")
        }
        }
  }

const c1 = new Carros (1,0)
const c2 = new Carros (1,1)
const c3 = new CarroEspecial (3)
// const c4 = new CarroPadrao ()
c1.info()
c2.info()
c3.info()

