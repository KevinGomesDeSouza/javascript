let nome = String("oBrunoooooooo Pinho Campossssss 1978")
let numeros = "1, 10, 100, 1000, 10000"
console.log(numeros.match(/10?/ig))
let email = "bruno@bruno.com.br"
console.log(numeros.match(/123*/ig))
console.log(nome)

console.log(nome.search(/pinho/i))
console.log(nome.replace("Pinho", "Teste"))
console.log(nome.match(/[oh]/ig))

console.log(nome.match(/[oh]/ig))
console.log(nome.match(/[a-m|1-9]/ig))


//metacaracteres
console.log(nome.match(/\d/ig))
console.log(nome.match(/\s/ig))
console.log(nome.match(/\b/ig))
console.log(nome.match(/o/ig))

//quantificadores