class Cxmsg {
    constructor(config){
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
        this.estilo = document.head 
        
    }
    mostrar = ()=>{
    //Criando as divs do login
        this.destino.innerHTML += 
        "<div id='div_container'>"+
            "<div id='login1'>"+
                "<div id='cabecalho'>"+
                    "<p>"+this.titulo+"</p>"+
                "</div>"+
                "<div id='corpo'>"+
                    "<p>"+this.texto+"</p>"+
                "</div>"+
                "<div id='rodape'>"+
                    "<p>"+ 
                        "<button id='ok'>ok</button>"+
                    "</p>"+
                "</div>"+
            "</div>"+
        "</div>"

    //implantando o css nas divs acima
    this.estilo.innerHTML += "<link rel='stylesheet' href='cx.css'></link>"

    const btn_ok = document.getElementById("ok")
    btn_ok.addEventListener("click",()=>{
        this.ocultar()    
    })

    }
    ocultar = ()=>{
        const div_container = document.getElementById("div_container")
        div_container.remove()
        const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
        btn_mostrarcxmsg.addEventListener("click",()=>{
            cxmsg.mostrar()
        
            
        })

    }
}