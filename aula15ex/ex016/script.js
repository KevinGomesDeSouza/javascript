var botao = document.getElementById ('botao')
botao.addEventListener('click', clicar)
function clicar () {
    inicio = document.getElementById ('inicio')
    fim = document.getElementById ('fim')
    passo = document.getElementById ('passo')
    contagem = document.getElementById ('contagem')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert ('[ERRO] faltam dados')
        contagem.innerHTML = 'Impossível contar'
    }
    else {
        i = Number(inicio.value)
        f = Number (fim.value)
        p = Number (passo.value)
        if (p == 0) {
            alert ('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        contagem.innerHTML = ''
        if (i<f) {
            for (i;i <= f;i+=p) {
                    contagem.innerHTML += `&#x1F449 ${i}`
                    if (i >= f) {
                        contagem.innerHTML += '&#x1F449 &#x1F3C1'
                    }

                
            }
        }
        else {
            for (i;i >= f; i-=p) {
                contagem.innerHTML += `&#x1F449 ${i}`
                if (i <= f) {
                    contagem.innerHTML += '&#x1F3C1'
                }


            }
        }    
           


    }



} 


