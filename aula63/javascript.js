const nome = Symbol("nome")
const numero = Symbol("")
const corUniforme = Symbol("") 

const Jogador = {
    [nome]: "j1",
    numero: 10,
    corUniforme: "amarelo"
}

for(p in Jogador){
    console.log(p)
}
console.log(Jogador[nome])