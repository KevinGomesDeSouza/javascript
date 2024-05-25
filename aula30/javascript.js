const idade = [15,21,30,17,18,44,12,50]
maiorDeIdade = idade.filter ((el)=>{
    return el >= 18
})
menorDeIdade = idade.filter ((el)=>{
    return el < 18
})

console.log (idade)
console.log (maiorDeIdade)
console.log (menorDeIdade)