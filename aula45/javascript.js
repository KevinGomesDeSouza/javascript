const Pessoa = {
    nome:"Bruno",
    canal:"CFB Cursos",
    curso:"Javascript",
    aulas: {
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
}

const j_json=JSON.stringify(Pessoa)
const o_json=JSON.parse (j_json)

console.log (j_json)
console.log (o_json)