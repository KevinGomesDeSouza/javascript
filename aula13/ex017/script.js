
function clicar (){
    var DataNasc = document.getElementById ('DataNas')
    var sexo = document.getElementsByName ('sexo') 
    var texto = document.getElementById ('texto')
    var imagem = document.getElementById ('imagem')
    var PegandoData = new Date ()
    var DataAtual = PegandoData.getFullYear ()
    

    var idade = (DataAtual) - Number (DataNasc.value)
    var genero = ''
    if (sexo [0].checked) {
        genero = 'homem'
    }
    else {
        genero = 'mulher'
    }
    texto.style.textAlign ='center'
    texto.innerHTML = `Detectamos ${genero} com ${idade} anos.`

//Config para homens
    if (genero == 'homem' && idade < 10) {

        imagem.src = 'imagens/menino.png'

    }

    else if (genero == 'homem' && idade < 21){
        
        imagem.src = 'imagens/homem-jovem.png'
    }

   
    else if (genero == 'homem' && idade < 50){
        
        imagem.src = 'imagens/homem-adulto.png'
    }    


    else {
        
        imagem.src = 'imagens/velho.png'
    } 
    
//Config para mulheres
    if (genero == 'mulher' && idade < 10) {

        imagem.src = 'imagens/menina.png'

    }

    else if (genero == 'mulher' && idade < 21){
        
        imagem.src = 'imagens/mulher-jovem.png'
    }


    else if (genero == 'mulher' && idade < 50){
        
        imagem.src = 'imagens/mulher-adulta.png'
    }    


    else if (genero == 'mulher' && idade >= 50) {
        
        imagem.src = 'imagens/velha.png'
    }        
}


