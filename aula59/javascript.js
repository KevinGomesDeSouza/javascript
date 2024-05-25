const objetos = document.getElementById("objetos")


let computador = {
    cpu:"i9",
    ram:"64gb",
    hd:"2tb",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`ram:${this.ram}`)
        console.log(`hd:${this.hd}`)
    }

}
computador["monitor"] = "22pol"
computador.placaVideo = "rtx"
delete(computador.cpu)

const c1 = Object.assign({},computador)

computador.info() 

const c2 = Object.create(computador)

const o1 = {obj1:"1"}
const o2 = {obj2:"2"}
const o3 = {obj3:"3"}
const o4 = Object.assign(o1,o2,o3) 


const computadores = [
    computador = {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb"
    
    },
    computador = {
        cpu:"i7",
        ram:"32gb",
        hd:"2tb"
    
    },
    computador = {
        cpu:"i5",
        ram:"16gb",
        hd:"1tb"
    
    }]

computadores.forEach((c)=>{
    const div = document.createElement("div")
    div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>"+ c.hd 
    objetos.appendChild(div)
    div.setAttribute("class","computador")
})

// objetos.innerHTML = JSON.stringify(computadores)



