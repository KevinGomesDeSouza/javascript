class Cursos {
    static cursos = ["Javascript","HTML", "CSS", "Arudino", "Raspberry", "C++", "Python","Java","C#" ]
    static getTodosCursos = ()=>{
        return this.cursos
    }

    static getCurso = (i_curso)=>{
        return this.cursos[i_curso]
    }

    static addCurso = (novoCurso)=>{
        this.cursos.push(novoCurso)
    }
    static apagarCurso = ()=>{
        this.cursos = []
    }
    
}

export {Cursos}