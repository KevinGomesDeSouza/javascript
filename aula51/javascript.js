const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

numero.innerHTML = "Esperando"

btn_promessa.addEventListener("click", ()=>{
    numero.innerHTML = "Processando"
    promessa()

})

const promessa = ()=>{
    let promise = new Promise((resolve,reject)=>{

        let resultado = false
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
                resolve("Deu tudo certo")
            }else{
                reject("Deu tudo errado")
            }
    
        },tempo)
    })
    
    promise.then((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.remove ("erro")
        numero.classList.add ("ok")
    })
    
    promise.catch((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.remove ("ok")
        numero.classList.add ("erro")
    })

}






