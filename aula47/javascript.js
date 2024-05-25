class Nave {
    constructor (energia){
        this.energia = energia
        this.disparos = 100
    }
}


const n1 = new Nave




Nave.prototype.vida = 10
Nave.prototype.disparar =function (){
    if (this.disparos > 0) {
        this.disparos--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()

console.log (n1.disparos)





