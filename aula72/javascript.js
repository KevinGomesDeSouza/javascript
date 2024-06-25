const f_texto = document.getElementById("f_texto")
const p_texto = document.getElementById("p_texto")
const btn_texto = document.getElementById("btn_texto")


btn_texto.addEventListener ("click",(evt)=>{

})

let num = 10 

window.localStorage.setItem("numero", num)
alert(localStorage.getItem("numero"))
alert(localStorage.key(0))
localStorage.length 