const TeclasNum = [...document.querySelectorAll (".num")]
const TeclasOp = [...document.querySelectorAll (".op")]
const TeclaRes = document.querySelector(".res")
const Display = document.querySelector ("#display")
const Ton = document.getElementById ("ton")
const Tlimpar = document.getElementById ("tlimpar")
let ContagemParaFecharParenteses2 = 0
var status1 = "on"

//Adição de evento e funções do botão ON

Ton.addEventListener ("click",(evt)=>{
    if(status1 == "on") {
        status1 = "off"
        Ton.innerHTML = "OFF"
        Ton.style.color = "red"
        Display.innerHTML = ""
        function apagar(array,função) {
            array.map ((el)=>{
                el.removeEventListener("click", função)
            })
        }

        apagar(TeclasNum, z)
        apagar(TeclasOp, b)

        
    }
    else {
        status1 = "on"
        Ton.innerHTML = "ON"
        Ton.style.color = "black"
        Display.innerHTML = "0"
        function apagar(array,função) {
            array.map ((el)=>{
                if (el.innerHTML != ")"){
                el.addEventListener("click", função)
            }
            })
        }

        apagar(TeclasNum, z)
        apagar(TeclasOp, b)

        

    }

})

//função de preenchimento do display

const z = (evt)=>{
    Display.innerHTML == "0" && evt.target.innerHTML != ","?Display.innerHTML = "":null
    Display.innerHTML += evt.target.innerHTML
    let IndiceUltimo = Display.innerHTML.length
    let ValorPenultimo = Display.innerHTML.substring (IndiceUltimo-2,IndiceUltimo-1)
    let ValorAntePenultimo = Display.innerHTML.substring (IndiceUltimo-3,IndiceUltimo-2)   
    let ProcurarSeOPenultimoÉNumero = ValorPenultimo.search(/[0-9]/)
    let ValorUltimo = Display.innerHTML.substring (IndiceUltimo-1,IndiceUltimo)
    let se = ValorUltimo.search (/[0-9]/)
    
    //IF para impedir que possa ser acrecentado um ponto depois de um sinal de operação 
    if(ProcurarSeOPenultimoÉNumero == -1 && ValorPenultimo != ")" && ValorPenultimo != "(" && ValorUltimo == ","){
        Display.innerHTML = Display.innerHTML.replace(/..$/, ",")
        
        
    }

    else if (ValorPenultimo == "("  &&  ValorUltimo == "," || ValorPenultimo == ")" &&  ValorUltimo == ","){
        Display.innerHTML = Display.innerHTML.replace(/.$/,"")
    }

    //IF que remove o eventlistener da tecla ponto após a penultima string ser um número e a última ser um ponto
    else if(ValorPenultimo == "," &&  se != -1){
        TeclasNum.map ((el)=>{
            if (el.innerHTML == ","){
            el.removeEventListener("click", z)
        }
        })
        
    }
    // IF para adicionar o eventlistener na tecla ponto de novo após a penultima string não ser um numero e não ser um ponto
    else if(ProcurarSeOPenultimoÉNumero == -1 && ValorPenultimo != ","){
        TeclasNum.map ((el)=>{
            if(el.innerHTML == ","){
                el.addEventListener("click", z)
                
            }
        })
        
        
    }

    // IF para impedir de adicionar o parenteses depois de um numero e depois de um ponto
    if (ProcurarSeOPenultimoÉNumero != -1 && ValorUltimo == "(" || ValorPenultimo == "," && ValorUltimo == "("){
        Display.innerHTML = Display.innerHTML.replace(/.$/, "")
    }
    if (ProcurarSeOPenultimoÉNumero == -1 && ValorUltimo == ")" || ValorPenultimo == "," && ValorUltimo == ")"){
        Display.innerHTML = Display.innerHTML.replace(/.$/, "")
    }
    // IF para impedir de adicionar número depois do fechamento de parênteses
    if(ValorPenultimo == ")" && se != -1) {
        Display.innerHTML = Display.innerHTML.replace(/.$/, "")
    }
    // IF para impedir de adicionar parenteses após um parenteses
    if (ValorPenultimo == "(" && ValorUltimo == ")") {
        Display.innerHTML = Display.innerHTML.replace(/.$/, "(")
    }
    if(ValorPenultimo == ")" && ValorUltimo == "(") {
        Display.innerHTML = Display.innerHTML.replace(/.$/, "")
    }
    // IF para remover o evento de ativar o resultado quando abrir parenteses
    if (ValorUltimo == "("){
        TeclaRes.removeEventListener("click", a)
    }
    // IF para adicionar o evento de ativar o resultado quando fechar parenteses
    if (ValorUltimo == ")"){
        TeclaRes.addEventListener("click", a)
    }

    // IF que verifica se a última string é um parenteses aberto e se a penúltima é um sinal, assim removendo o evento da tecla de abrir parenteses e adicionando um numero para a contagem que possibilita fechar o parenteses
    if(ProcurarSeOPenultimoÉNumero == -1 && ValorPenultimo != ")" && ValorPenultimo != "," && ValorUltimo == "("){
        evt.target.removeEventListener("click", z)
        var ContagemParaFecharParenteses = 1
    }

    ContagemParaFecharParenteses == 1? ContagemParaFecharParenteses2 = 1:null
    
    if (ValorPenultimo == "+" && se != -1 && ValorAntePenultimo != "("|| ValorPenultimo == "-" && se != -1 && ValorAntePenultimo != "("|| ValorPenultimo == "x" && se != -1 && ValorAntePenultimo != "("|| ValorPenultimo == "/" && se != -1 && ValorAntePenultimo != "(" ){
        var ContagemParaFecharParenteses3 = 1
    }
    else if (ValorPenultimo == "+" && se != -1 && ValorAntePenultimo == "("|| ValorPenultimo == "-" && se != -1 && ValorAntePenultimo == "("|| ValorPenultimo == "x" && se != -1 && ValorAntePenultimo == "("|| ValorPenultimo == "/" && se != -1 && ValorAntePenultimo == "(" ){
        
    }
    
    ContagemParaFecharParenteses2 == 1? ContagemParaFecharParenteses2 += ContagemParaFecharParenteses3??0:null

    if(ContagemParaFecharParenteses2 >= 2){
        TeclasNum.map ((el)=>{
            if(el.innerHTML == ")"){
                el.addEventListener("click", z)

            }
            ContagemParaFecharParenteses2 = 0
        })
    }
    if(ValorUltimo == ")" && ProcurarSeOPenultimoÉNumero != -1){
        evt.target.removeEventListener("click", z)
        TeclasNum.map ((el)=>{
            if(el.innerHTML == "("){
                el.addEventListener("click", z)

            }
        })
    }
    

    
}



// mapeamento e chamada da função anterior
TeclasNum.map ((el)=>{
    
    el.innerHTML == ")"?null:el.addEventListener("click", z)
    
})

const b = (evt)=>{
    // Display.innerHTML == 0?Display.innerHTML = "":null     
    Display.innerHTML += evt.target.innerHTML
    let IndiceUltimo = Display.innerHTML.length
    let ValorPenultimo = Display.innerHTML.substring (IndiceUltimo-2,IndiceUltimo-1)
    
    if(ValorPenultimo == "+"||ValorPenultimo =="-"||ValorPenultimo =="x"||ValorPenultimo =="/"||ValorPenultimo ==","){
        Display.innerHTML = Display.innerHTML.replace(/.{1,2}$/, "")
        Display.innerHTML += evt.target.innerHTML
        
    }
        
    else 
    {

        

        
}




}

TeclasOp.map ((el)=>{
    el.addEventListener("click", b)})

Tlimpar.addEventListener("click",(evt)=>{
    if(status1 == "on"){
    Display.innerHTML = 0
    TeclasNum.map ((el)=>{
        
            el.innerHTML == ")"?el.removeEventListener("click",z):el.addEventListener("click", z)
            
        })}
    
})

// Peguer os números e concatenar eles de forma correta

TeclaRes.addEventListener ("click", a = (evt)=>{
   let operaçãoString = [...Display.innerHTML]
   operaçãoString.map((el,i)=>{
    if(el == ","){
        operaçãoString [i] = "."

    }
   })
   console.log(operaçãoString)
   const operaçãoConvNum = operaçãoString.map ((el)=>{
        return parseInt(el)
   })
   let IndiceUltimo = operaçãoString.length-1
   let ValorUltimo = operaçãoString[IndiceUltimo]
   let ProcurarSeÉNumero = ValorUltimo.search(/[0-9]/)
   if (ProcurarSeÉNumero != -1 || ValorUltimo == ")"){
   const operaçãoReconvString = []
    let concatenador = ''
    for (let c = 0;c <= operaçãoConvNum.length; c++){
        if (operaçãoConvNum [c] >= 0 && operaçãoConvNum [c] <= 9 || operaçãoString [c] == "." ){
            concatenador += operaçãoString[c]
        }
        else if (typeof (operaçãoConvNum [c]) === typeof(NaN) || typeof (operaçãoConvNum [c]) === typeof(undefined) ) {
            concatenador!= ''?operaçãoReconvString.push(concatenador):null 
            operaçãoReconvString.push(operaçãoString[c]??operaçãoReconvString.pop())
            concatenador = ''
       }
   }


// Tornando As strings de número em Number e mantendo os operadores como strings 

        let opera = operaçãoReconvString.map((el)=>{
            return parseFloat (el)||el     
        })

        opera.map ((el,indice)=>{
            if (el == "0"){
               opera [indice] = 0
            }
        })
        


            function MultiEDiv(c){
            let removedor = 3
            let temporario = 0
            let depois = c
            let antes = c
            depois += +1
            antes += -1
            switch (opera[c]){
                case 'x':
                    opera[antes] == "("? (opera.splice(antes+1,0,0), antes += 1,depois += 1, c+=1):null
                    temporario += (opera[antes]??0) * (opera [depois]??0)
                        antes < 0
                        ? (antes = 0) || (removedor = 2) && (c += 1)
                        : null
                        opera.splice (antes,removedor)
                        c+= -2
                        opera.splice(c+1,0,temporario)
                    break
                case '/':
                    opera[antes] == "("? (opera.splice(antes+1,0,0), antes += 1,depois += 1, c+=1):null
                    temporario += (opera[antes]??0) / (opera [depois]??0)
                    antes < 0
                    ? (antes = 0) || (removedor = 2) && (c += 1)
                    : null
                    opera.splice (antes,removedor)
                    c+= -2
                    opera.splice(c+1,0,temporario)
                    break
            }
            c == undefined? c = 0:null
            return c
        }
    
        
            function SomaESubt(c){
            let removedor = 3
            let temporario = 0
            let antes = c
            let depois = c
            antes += -1
            depois += 1
            switch (opera[c]){
                case '+':
                    opera[antes] == "("? (opera.splice(antes+1,0,0), antes += 1,depois += 1, c+=1):null
                    temporario += (opera[antes]??0) + (opera [depois]??0)
                    antes < 0? (antes = 0) || (removedor = 2) && (c += 1): null
                    opera.splice (antes,removedor)
                    c+= -2
                    opera.splice(c+1,0,temporario)
                    break
                case '-':
                    opera[antes] == "("? (opera.splice(antes+1,0,0), antes += 1,depois += 1, c+=1):null
                    temporario += (opera[antes]??0) - (opera [depois]??0)
                    antes < 0? (antes = 0) || (removedor = 2) && (c += 1): null
                    opera.splice (antes,removedor)
                    c+= -2
                    opera.splice(c+1,0,temporario)
                    break        
                }
                c == undefined? c = 0:null
                return c
    }

    

    opera.map ((el,indice)=>{
        if (el == "("){
            for(let c=indice+1; opera[c] != ")";c++){
                c = MultiEDiv(c)
                
            }
            for(let c=indice+1; opera[c] != ")";c++){
                c = SomaESubt(c)
                
            }
            opera.splice(indice+2,1)
            opera.splice(indice,1)
            
        }
    })

    for (let c=0; c <= opera.length-1;c++){
        c = MultiEDiv(c)
        
    }

    for (let c=0; c <= opera.length-1;c++){
        c = SomaESubt(c)
    }

      
    Display.innerHTML = opera.toString().replace(".", ",")

    

}})




