
const configdv = {
    endpoint:"produtos.json",

};



const dgv = (configdv)=>{
    const dgvDados = document.querySelector(".dgvDados")
    dgvDados.innerHTML = ''
    fetch(configdv.endpoint)
    .then(res=>res.json())
    .then(res =>{
    res.map((objeto)=>{
        //criar elementos
        const dgvLinha = document.createElement("div")
        const id = document.createElement("div" )
        const produto = document.createElement("div")
        const marca = document.createElement("div")
        const modelo = document.createElement("div")
        const funcao = document.createElement("div")
        const imgDeletar = document.createElement("img")
        const imgEditar = document.createElement("img")
        const imgExibir = document.createElement("img")

        //passar os valores do JSON e os icones para eles
        id.innerHTML = objeto.id
        produto.innerHTML = objeto.produto
        marca.innerHTML = objeto.marca
        modelo.innerHTML = objeto.modelo
        // funcao.innerHTML = "D E V"
        imgDeletar.setAttribute("src","delete.svg")
        imgEditar.setAttribute("src","edit.svg")
        imgExibir.setAttribute("src","exibir.svg")

        //colocar os identificadores (classes)
        dgvLinha.setAttribute("class","dgvLinha")
        id.setAttribute("class","c1")
        produto.setAttribute("class","c2")
        marca.setAttribute("class","c3")
        modelo.setAttribute("class","c4")
        funcao.setAttribute("class","c5")
        imgDeletar.setAttribute("class","dgvIcone")
        imgEditar.setAttribute("class","dgvIcone")
        imgExibir.setAttribute("class","dgvIcone")

        //colocar os icones na coluna "função"

        funcao.appendChild(imgDeletar)
        funcao.appendChild(imgEditar)
        funcao.appendChild(imgExibir)


        //colocar dentro da div linha
        dgvLinha.appendChild(id)
        dgvLinha.appendChild(produto)
        dgvLinha.appendChild(marca)
        dgvLinha.appendChild(modelo)
        dgvLinha.appendChild(funcao)


        //colocar no HTML
        
        dgvDados.appendChild(dgvLinha)
        console.log(dgvLinha)


        
        
    })


    console.log(res)

    })
}

dgv(configdv)

