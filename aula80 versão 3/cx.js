class Cxmsg {
    static cor = "#888"
    static destino = null
    static div_container = null
    static estilo = null
    static tipo = null
    static comando_sn = null
    static textos = []

    
    static mostrar = (config,titulo,texto)=>{
        this.cor = config.cor
        this.tipo = config.tipo
        this.comando_sn = config.comando_sn
        this.titulo = titulo
        this.texto = texto
        this.textos = config.textos
        this.destino = document.body
        this.estilo = document.head 
    //Criando as divs do login
        this.div_container = document.createElement("div")    
        this.div_container.setAttribute("id","div_container")

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
        if(this.tipo == "ok"){
            const button = document.createElement("button")
            button.setAttribute("class","botao")
            button.innerHTML = "OK"
            rodape.appendChild(button)
            button.addEventListener("click",()=>{
                this.ocultar()
            })
            
        }else if(this.tipo == "sn"){
            const button_sim = document.createElement("button")
            button_sim.setAttribute("class","botao")
            button_sim.innerHTML = this.textos[0]
            const button_nao = document.createElement("button")
            button_nao.setAttribute("class","botao")
            button_nao.innerHTML = this.textos[1]
            rodape.appendChild(button_sim)
            rodape.appendChild(button_nao)

            button_sim.addEventListener("click",()=>{
                this.comando_sn(this.textos[0])
                this.ocultar()
            })
            button_nao.addEventListener("click",()=>{
                this.ocultar()
            })
        }
    //Aninhando as divs do login
        this.destino.appendChild(this.div_container)

        this.div_container.appendChild(login1)

        login1.appendChild(cabecalho)
        login1.appendChild(corpo)
        login1.appendChild(rodape)


    //implantando o css nas divs acima
        this.estilo.innerHTML+= 
        '<style>'+
            '*{box-sizing: border-box;}'+

            '#div_container {height:100%;width: 100%;position: absolute;display: flex;justify-content: center;align-items: center;top: 0;background-color: rgba(0, 0, 0, 0.692);}'+

            '#login1{display: flex;flex-direction: column;background-color: white;width: 300px;height: 180px;border-radius: 5px;align-items: baseline;justify-content: space-between;}'+

            '#login1 > #cabecalho {background-color: #3D88FF;border-radius: 5px 5px 0px 0px;display: flex;align-items: center;padding-left: 3px;height: 30px;width: 100%;color: white;}'+

            '#login1> #corpo {padding-left: 3px;}'+

            '#login1 > #rodape {background-color: #C6C6C6;width: 100%;display: flex;justify-content: center;border-radius: 0px 0px 5px 5px;}'+

            '.botao {background-color: #3D88FF;width: 100px;height: 40px;border-radius: 5px;margin: 5px;color: white;cursor: pointer;}'+

        '</style>' 

    //
    }
    static ocultar = ()=>{
        this.div_container.remove()

   

    }
}

export{Cxmsg}