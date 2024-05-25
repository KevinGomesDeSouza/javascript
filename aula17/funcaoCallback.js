function newbutton (nome, pingola){
    const corpo = document.querySelector ('body')
    const botão = document.createElement ('button')
    botão.innerHTML = nome
    pingola (botão)
    corpo.insertAdjacentElement('beforeend', botão)
}

 newbutton ('Login', (cu) => {
    cu.style.cssText = `
    color: red;
    font-size: 100px;
    `
 })
 newbutton ('Signup', (bota) => {
   bota.style.cssText = `
    color: red;
    font-size: 100px;
    `
 })
