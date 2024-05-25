let nome = new String("Bruno Pinho Campos")
let nome2 = new String("Bruno Pinho Campos")
let canal = "CFBCursos"
console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))
console.log(nome.charCodeAt(0))

console.log(nome.concat(canal))

console.log(nome.indexOf("no"))

console.log (nome.localeCompare(nome2))

console.log (nome.replace("B","u"))

console.log (nome.search("B","u"))

const sobrenome = nome.slice (6,11)

console.log(sobrenome)
console.log(nome)


let arr_nome=nome.split(" ")


let parte1 = nome.substring (0,5)
console.log(parte1)


let parte2 = nome.substr (0,5)
console.log(parte1) 

String.fromCodePoint()



