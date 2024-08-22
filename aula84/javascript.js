
const configdv = {
    endpoint:"produtos.json",

};



const dgv = (configdv)=>{
    fetch(configdv.endpoint)
    .then(res=>res.json())
    .then(res =>{
    res.map((objeto)=>{
        //criar elementos
        const dgvLinha = document.createElement("div","")
        const id = document.createElement("div" )
        const produto = document.createElement("div")
        const marca = document.createElement("div")
        const modelo = document.createElement("div")
        const funcao = document.createElement("div")

        //passar os valores do JSON para eles
        id.innerHTML = objeto.id
        produto.innerHTML = objeto.produto
        marca.innerHTML = objeto.marca
        modelo.innerHTML = objeto.modelo
        funcao.innerHTML = "D E V"
        //colocar os identificadores (classes)
        dgvLinha.setAttribute("class","dgvLinha")
        id.setAttribute("class","c1")
        produto.setAttribute("class","c2")
        marca.setAttribute("class","c3")
        modelo.setAttribute("class","c4")
        funcao.setAttribute("class","c5")


        //colocar dentro da div linha
        dgvLinha.appendChild(id)
        dgvLinha.appendChild(produto)
        dgvLinha.appendChild(marca)
        dgvLinha.appendChild(modelo)
        dgvLinha.appendChild(funcao)


        //colocar no HTML
        const dgvDados = document.querySelector(".dgvDados")
        dgvDados.appendChild(dgvLinha)
        console.log(dgvLinha)


        
        
    })


    console.log(res)

    })
}

dgv(configdv)

