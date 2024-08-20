const config ={
        titulo:"Teste",
        texto:"CFB Cursos",
        cor:"#48f"
        
}

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.getElementById("btn_mostrarcxmsg3")

const cxmsg = new Cxmsg(config)

btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar("teste1","amostradinkkkkkk")


    
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    cxmsg.mostrar()


    
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    cxmsg.mostrar()


    
})