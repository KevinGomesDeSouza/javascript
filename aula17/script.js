array = []
Num = 0
function adicionar () {
    resultado.innerText = ''
    NumText = document.getElementById ('NumText')
    Num = Number(NumText.value)
    if (Num > 0 && Num <= 100 && array.indexOf(Num) == -1)  {
        
        seletor = document.getElementById ('seletor')
        option = document.createElement ('option')
        option.innerText = `Valor ${Num} adicionado.`
        seletor.appendChild(option)
        NumText.value = ''
        array.push (Num) }
    else {
        window.alert ('Valor inválido ou já se encontra na lista')
    }


}

function finalizar () {
    resultado.innerText = ''
    if (Num!= 0) {
        
        // Quantidade de números
        NumCadas = document.createElement ('p')
        resultado = document.getElementById ('resultado')
        NumCadas.innerText = `Ao todo, temos ${array.length} números cadastrados`
        resultado.appendChild (NumCadas)
        // Maior valor
        MaiorValorP = document.createElement ('p')
        maior = 0
        menor = 0
        for (a = 0;a <= array.length -1;a++) {
            if (array [a] > maior ) {
                maior = array [a]
                if (menor == 0) {
                    menor = array [a]
                }
            }
            else if (array [a] < menor){
                menor = array [a]
                
                
            }
    
        }
        MaiorValorP.innerText = `O maior valor informado foi ${maior}`
        resultado.appendChild (MaiorValorP)

        // Menor valor
        MenorValorP = document.createElement ('p')
        MenorValorP.innerText = `O menor valor informado foi ${menor}`
        resultado.appendChild (MenorValorP)

        //Soma dos valores
        PargSoma = document.createElement ('p')
        soma = 0
        for (c = 0; c <= array.length -1; c++) {
            soma += array [c]
        }
        PargSoma.innerText = `Somando todos os valores temos ${soma}`
        resultado.appendChild (PargSoma)

        //Média dos valores
        PargMedia =  document.createElement ('p')
        media = 0
        media = soma/array.length
        PargMedia.innerText = `A média dos valores digitados é ${media}`
        resultado.appendChild (PargMedia)
    }
        
    else {
        window.alert ('Valor inválido ou já se encontra na lista')
    }


}
