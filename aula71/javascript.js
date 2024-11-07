const f_nome = document.getElementById("f_nome")
const f_nota = document.getElementById("f_nota")
const f_msg = document.getElementById("f_msg")

document.querySelector("#btn_validar").addEventListener ("click",(evt)=>{
    estadoValidacao = f_nota.validity 

    if(estadoValidacao.valueMissing){
        
        f_nota.setCustomValidity("Poxa, este campo é obrigatório")
    }

    

    f_msg.innerHTML = msg
    evt.preventDefault()



})