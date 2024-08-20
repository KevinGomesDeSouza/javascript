const temperatura = document.getElementById("temperatura")
const nivel = document.getElementById("nivel")
const pressao = document.getElementById("pressao")

const endpoint = "https://844f1358-4147-47fb-8cda-5d5e2e27efc8-00-3s860dsgbw3kv.kirk.replit.dev/"

let dados ={
    _temperatura: 0,
    _pressao: 0,
    _nivel: 0,
    set valores(val){
        this._temperatura = val.disponibilidade
        this._pressao = val.qualidade
        this._nivel = val.performance
        temperatura.innerHTML = this._temperatura
        nivel.innerHTML = this._nivel
        pressao.innerHTML = this._pressao
    },
    get valores(){
        return [this._temperatura, this._pressao, this._nivel]
    }
}

const buscardados = ()=>{
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.valores = res
    })
}

let interval = setInterval(buscardados,1000)

console.log(dados.valores)