import { Cxmsg } from "./cx.js"

const config ={
        cor:"#48f",
        tipo: "sn",
        textos: ["SIM","NÃO"],
        comando_sn:(a)=>{
            console.log("O botão " +a+ " foi pressionado")            
        }
        
}

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.getElementById("btn_mostrarcxmsg3")



btn_mostrarcxmsg.addEventListener("click",()=>{
    config.tipo = "ok"
    Cxmsg.mostrar(config,"teste1","amostradinkkkkkk")
    

    
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    config.tipo = "sn"
    Cxmsg.mostrar(config)


    
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    config.tipo = "sn"
    config.textos = ["OK","CANCELA"]
    Cxmsg.mostrar(config)


    
})