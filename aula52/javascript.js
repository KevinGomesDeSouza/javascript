const div_relógio = document.getElementById("div_relógio")
const div_data = document.getElementById("div_data")
const botao_ativar = document.getElementById("botao_ativar")
const botao_parar = document.getElementById("botao_parar")
const tmp_alarme = document.getElementById ("numero")
const timer = document .getElementById("caixa")
const hora_alarme = document.getElementById("hora_alarme")

const som_alarme = new Audio("alarme.mp3")
som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

botao_ativar.addEventListener("click", ()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = "Hora do Alarme:" + (dt_alarme.getHours() < 10?"0" + dt_alarme.getHours():dt_alarme.getHours()) + ":" + (dt_alarme.getMinutes() < 10?"0" + dt_alarme.getMinutes():dt_alarme.getMinutes()) + ":" + (dt_alarme.getSeconds() < 10?"0" + dt_alarme.getSeconds():dt_alarme.getSeconds())

})

botao_parar.addEventListener("click", ()=>{
    alarme_ativado = false 
    alarme_tocando = false 
    hora_alarme.innerHTML ="Hora do Alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarm")
    som_alarme.pause();
    som_alarme.currentTime = 0;
    
})

data = ()=>{
    const data = new Date()
    let dia = data.getDate()
    dia = dia<10?"0" + dia: dia
    let mês = data.getMonth() + 1
    mês = mês<10?"0" + mês: mês
    let ano = data.getFullYear()
    const data_formatada = dia + "/" + mês + "/" + ano
    div_data.innerHTML = data_formatada
}

relógio = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10?"0" + hora: hora
    let minutos = data.getMinutes()
    minutos = minutos<10?"0" + minutos: minutos
    let segundos = data.getSeconds()
    segundos = segundos<10?"0" + segundos: segundos
    const hora_formatada = hora + ":" + minutos + ":" + segundos
    div_relógio.innerHTML = hora_formatada
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarm")
        }
    }
    

}
const intervalo = setInterval(relógio,1000)

relógio()
data()