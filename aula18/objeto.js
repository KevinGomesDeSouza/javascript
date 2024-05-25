amigo = {nome:'josé', sexo: 'M', peso:85.4,engordar(p){
    console.log ('engordou')
    this.peso += p
}}

console.log('' in amigo)

amigo.engordar (5)
console.log (`${amigo.nome} pesa ${amigo.peso}kg`)

pessoa = {
    nome:'kevin',
    idade: 19,
    Salario: 1.000
}

for (numero in pessoa) {
    console.log (pessoa[numero])
}


    