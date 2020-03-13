// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Carlos",notas:[],cursos:[],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

const adicionarAluno = (string) => {
    alunosDaEscola.push({nome:string, notas:[], cursos:[], faltas:0})
    console.log("Aluno adicionado com sucesso à base de dados:")
    return alunosDaEscola[alunosDaEscola.length - 1] 
}

const listarAlunos = () => {
    for (var aluno of alunosDaEscola) {
        console.log("Nome: " + aluno.nome)
        console.log("Número de faltas: " + aluno.faltas)
        console.log("Notas do aluno: " + aluno.notas)
        if (aluno.cursos.length <= 0){
            console.log("Cursos: Aluno não matriculado.")}
        else {
            for (var curso of aluno.cursos){
                aluno.cursos.forEach((item) => {
                    console.log("Cursos: ")
                    return (item.nomeDoCurso + " | Data de matrícula: " + item.dataMatricula.getDay() + 
                    "/" + item.dataMatricula.getMonth() + 
                    "/" + item.dataMatricula.getFullYear())
                })
            }
        }
    }      
}

const buscarAluno = (string) => {
    busca = alunosDaEscola.filter(aluno => aluno.nome.indexOf(string) > -1)
    if (busca.length > 0) {
        for (var aluno of busca) {
            console.log("Nome: " + aluno.nome)
            console.log("Número de faltas: " + aluno.faltas)
            console.log("Notas do aluno: " + aluno.notas)
            if (aluno.cursos.length <= 0){
                console.log("Cursos: Aluno não matriculado.")}
            else {
                for (var curso of aluno.cursos){
                    aluno.cursos.forEach((item) => {
                        console.log("Cursos: ")
                        console.log(item.nomeDoCurso + " | Data de matrícula: " + item.dataMatricula.getDay() + 
                        "/" + item.dataMatricula.getMonth() + 
                        "/" + item.dataMatricula.getFullYear())
                    })
                }
            }

        }
    }
    else {
        console.log(`Não há alunos com o nome "${string}".`)        
    }
}

const matricularAluno = (stringAluno, stringCurso) => {
    busca = alunosDaEscola.filter(aluno => aluno.nome.indexOf(stringAluno) > -1)
    if (busca.length > 0) {
        console.log("Aluno matriculado com sucesso.")
        for (var aluno of busca) {
            console.log("Nome: " + aluno.nome)
            console.log("Cursos: ")
            aluno.cursos.push({nomeDoCurso: stringCurso, dataMatricula: new Date})
            aluno.cursos.forEach((item) => {
                console.log(item.nomeDoCurso + " | Data de matrícula: " + item.dataMatricula.getDay() + 
                "/" + item.dataMatricula.getMonth() + 
                "/" + item.dataMatricula.getFullYear())
            })
        }
    }
    else {
        console.log(`Não há alunos com o nome "${stringAluno}".`)        
    }
}

console.log(matricularAluno("Guilherme",'dev'))
console.log(matricularAluno("Henrique",'dev'))
console.log(matricularAluno("Jarbas",'dev'))

const aplicarFalta = (stringAluno, faltaAluno) => {
    busca = alunosDaEscola.filter(aluno => aluno.nome.indexOf(stringAluno) > -1)
    if (busca.length > 0) {
        console.log("Falta aplicada.")        
        for (var aluno of busca) {
            aluno.faltas = aluno.faltas + faltaAluno
            return `Nome: ${aluno.nome} \nFaltas: ${aluno.faltas}`
        }
    }
    else {
        return `Não há alunos com o nome "${stringAluno}".`        
    }
}

const aplicarNota = (stringAluno, notaAluno) => {
    busca = alunosDaEscola.filter(aluno => aluno.nome.indexOf(stringAluno) > -1)
    if (busca.length > 0) {      
        for (var aluno of busca) {
            if (aluno.cursos.length > 0){
                aluno.notas.push(notaAluno)
                return `Nota aplicada. \nNome: ${aluno.nome} \nNotas: ${aluno.notas}`
            }            
            else {
                return `O aluno ${stringAluno} não está matriculado.`
            }

        }
    }
    else {
        return `Não há alunos com o nome "${stringAluno}".`        
    }

}

const aprovarAluno = (stringAluno) => {
    busca = alunosDaEscola.filter(aluno => aluno.nome.indexOf(stringAluno) > -1)
    if (busca.length > 0) {      
        for (var aluno of busca) {
            if (aluno.faltas <= 3){
                total = aluno.notas.reduce((acumulado, nota) => {
                    return acumulado + nota})
                if (total / aluno.notas.length >= 7){
                    return`O aluno ${stringAluno} foi aprovado.`
                }
                else {
                    return `${stringAluno}: Reprovado.
                    O aluno não obteve a média de notas necessárias.`
                }

            }            
            else {
                return `O aluno ${stringAluno} foi reprovado por faltas.`
            }
            
        }
    }
    else {
        return `Não há alunos com o nome "${stringAluno}".`        
    }
}



