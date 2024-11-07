

const promessa = new Promise ((resolve,reject)=>{
    const a = "oi"
    if(a == "oi"){
        resolve("deu certo")
    }
    else {
        reject("deu errado")
    }
})



async function pegaDados (){
    const promessa2 = await promessa
    console.log(promessa2)

} 


console.log (promessa)
pegaDados()

