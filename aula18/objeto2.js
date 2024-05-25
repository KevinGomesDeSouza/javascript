const user = {
    name: "Diego",
    nickname:'Schell',  
    idade: 27,
    address: {
        street: 'Rua teste',
        number: 176
    },
}


function MostrarIdade ({idade}) {
    return idade
}

console.log (MostrarIdade (user))