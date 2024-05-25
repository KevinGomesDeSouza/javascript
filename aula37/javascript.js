let botões = [...document.querySelectorAll("input[type='button']")]

var op = [
    (val1,val2)=>{
        let resultado = 0
        resultado = val1+val2
        return resultado
    },
    (val1,val2)=>{
        let resultado = 0
        resultado = val1-val2
        return resultado
    },
    (val1,val2)=>{
        let resultado = 0
        resultado = val1*val2
        return resultado
    },
    (val1,val2)=>{
        let resultado = 0
        resultado = val1/val2
        return resultado
    }
]
botões.map ((el,i)=>{
    el.addEventListener ("click", ()=>{
        const valor1 = document.getElementById ("valor 1")
        const valor2 = document.getElementById ("valor 2")
        const resultado = document.getElementById ("resultado")
        resultado.value = op[i](Number.parseInt(valor1.value),Number.parseInt(valor2.value))
    })
})