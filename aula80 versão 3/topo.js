const head = document.head
const body = document.body
const estilo = "<link rel='stylesheet' href='topo.css'></link>"
head.innerHTML += estilo

const header = document.createElement("header")
header.setAttribute("id","topo")
header.setAttribute("class","topo")
body.prepend(header)

const logo = 
"<div id='logo' class='logo'>" +
    "<img src='LEGO_logo.svg.png' title='lego'/>" +
"</div>"

header.innerHTML+= logo

const login = 
"<div id='login' class='login'>" +
    "<p id='matricula'>Matrícula:<span></span></p>" +
    "<p id='nome'>Nome:<span></span></p>" +

"</div>"

header.innerHTML+= login