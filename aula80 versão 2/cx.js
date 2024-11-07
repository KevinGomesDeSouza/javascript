class Cxmsg {
    constructor(config){
        this.cor = config.cor
        this.destino = document.body
        this.estilo = document.head 
        
    }
    mostrar = (titulo,texto)=>{
        this.titulo = titulo
        this.texto = texto
    //Criando as divs do login
        const div_container = document.createElement("div")    
        div_container.setAttribute("id","div_container")

        const login1 = document.createElement("div")    
        login1.setAttribute("id","login1")

        const cabecalho = document.createElement("div")    
        cabecalho.setAttribute("id","cabecalho")
        cabecalho.innerHTML = this.titulo

        const corpo = document.createElement("div")    
        corpo.setAttribute("id","corpo")
        corpo.innerHTML=this.texto

        const rodape = document.createElement("rodape")    
        rodape.setAttribute("id","rodape")

        const button = document.createElement("button")
        button.setAttribute("id","ok")
        button.innerHTML = "OK"
    //Aninhando as divs do login
        this.destino.appendChild(div_container)

        div_container.appendChild(login1)

        login1.appendChild(cabecalho)
        login1.appendChild(corpo)
        login1.appendChild(rodape)

        rodape.appendChild(button)

    //implantando o css nas divs acima
        this.estilo.innerHTML+= "<link rel='stylesheet' href='cx.css'>"

    //
        button.addEventListener("click",()=>{
            this.ocultar()
        })
        
    }
    ocultar = ()=>{
        div_container.remove()

   

    }
}