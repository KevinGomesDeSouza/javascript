const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")
const botao = document.getElementById("botao")
const obterDados = ()=>{
    const endpoint = "https://844f1358-4147-47fb-8cda-5d5e2e27efc8-00-3s860dsgbw3kv.kirk.replit.dev/"
    fetch(endpoint)
    .then(res=> res.json())
    .then(dados =>{
        console.log(dados)
        p_temp.innerHTML = "temperatura: " + dados.temperatura
        p_nivel.innerHTML = "nivel: " + dados.nivel
        p_press.innerHTML = "pressão: " + dados.pressao
    })
}

let dados = {
    nome:"Bruno",
    canal:"CFBCursos",
    curso:"Javascript"
}

let cabecalho = {
    method: "POST",
    body: JSON.stringify(dados)
}

const gravarDados = () =>{
    const endpoint = "https://844f1358-4147-47fb-8cda-5d5e2e27efc8-00-3s860dsgbw3kv.kirk.replit.dev/"
    fetch(endpoint,cabecalho)
    .then(res => res.json())
    .then(ret =>{
        console.log(ret)
    })
}

botao.addEventListener("click", (evt)=>{
    gravarDados()

})
