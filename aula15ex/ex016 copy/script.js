function clicar () {
    // Selecionando as tags
    Ntext = document.getElementById ('Ntext')
    tabuada = document.getElementById ('seltab')
    

    // Convertendo de String para Número
    número = Number (Ntext.value)


    //Caso a caixa esteja vazia
    if (Ntext.value.length == 0)  {
        window.alert ('Por favor, digite um número')

    } 
    //Tabuada
    else {
        tabuada.innerHTML = ''
        for (var c = 1; c <= 10;c++) {
            multi = número * c
            tabuada.innerHTML +=`<option value = "tab ${c}">${número} X ${c} = ${multi}</br></option> `
        }
    }


    

  




}