const user = {
    name: "Diego",
    nickname:'Schell',  
    idade: 27,
    address: {
        street: 'Rua teste',
        number: 176
    },
}

const {idade,...bunda} = user
console.log (bunda)

const Arrays = [1,2,3,4,5,6,7,8,9,10]
const [, , ...corno] = Arrays

console.log (...corno)