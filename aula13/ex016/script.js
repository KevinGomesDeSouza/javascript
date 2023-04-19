var agora = new Date ()
var hora = agora.getHours ()
var texto = document.getElementById ('texto')
var img = document.getElementById ('imagem')
texto.innerHTML = `Agora são ${hora} horas`
if (hora < 12) {
    document.body.style.background = '#CCBA8D'
    img.src = 'imagens/dia.jpg' 

    

}
else if (hora < 18) {
    document.body.style.background = '#A47661'
    img.src = 'imagens/tarde.jpg'
}    

else {
    document.body.style.background = '#48494A'
    img.src ='imagens/noite.jpg'
}