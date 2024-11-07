const config ={
        titulo:"Teste",
        texto:"CFB Cursos",
        cor:"#48f"
        
}

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")

const cxmsg = new Cxmsg(config)

btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar()

    
})
