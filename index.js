// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Carlos",notas:[],cursos:[],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

const adicionarAluno = (string) => {
alunosDaEscola.push({nome:string, notas:[], cursos:[], faltas:0})
console.log("Aluno adicionado com sucesso à base de dados.")
return alunosDaEscola[alunosDaEscola.length - 1] 
}

function listarAlunos(){
for (var aluno of alunosDaEscola) {
    console.log("Nome: " + aluno.nome)
    }
}   

// Dá pra melhorar :D
const buscarAluno = (string) => {
for (var aluno in alunosDaEscola) {
    if (alunosDaEscola[aluno].nome.indexOf(string) >= 0) {
        console.log("Dados do aluno", alunosDaEscola[aluno].nome, ":")
        return (alunosDaEscola[aluno])
    }
    else {
        console.log("Não há registros.")
        break
    }
}
}


// Dá pra melhorar :D
const matricularAluno = (stringAluno, stringCurso) => {
    for (var aluno in alunosDaEscola) {
        if(alunosDaEscola[aluno].nome === stringAluno) {
            alunosDaEscola[aluno].cursos.push({nomeDoCurso: stringCurso, dataMatricula: new Date()})
            console.log("Aluno matriculado com sucesso.")
            return alunosDaEscola[aluno]
        }
        else {
            console.log("Não foi possível matricular o aluno. Dica: cadastrar aluno antes de matriculá-lo.")
        }
    }
}

// Dá pra melhorar :D
const aplicarFalta = (stringAluno, faltaAluno) => {
for (var aluno in alunosDaEscola) {
    if(alunosDaEscola[aluno].nome === stringAluno) {
        alunosDaEscola[aluno].faltas = alunosDaEscola[aluno].faltas + faltaAluno
        console.log("Falta aplicada ao aluno ", alunosDaEscola[aluno].nome, ".")
        return alunosDaEscola[aluno]
    }
    else {
        console.log("Não foi possível aplicar falta: aluno não matriculado.")
    }
}
}

// Dá pra melhorar :D
const aplicarNota = (stringAluno, notaAluno) => {
    for (var aluno in alunosDaEscola) {
        if (alunosDaEscola[aluno].nome === stringAluno){
            if(alunosDaEscola[aluno].cursos.length > 0) {
                alunosDaEscola[aluno].notas.push(notaAluno)
                console.log("Nota adicionada ao aluno", alunosDaEscola[aluno].nome, ":")
                return alunosDaEscola[aluno]
            }
            else {
                console.log("Aluno não matriculado.")
            } 
        }
        else {
            console.log("Aluno não cadastrado.")
        }
    }

}

// Dá pra melhorar :D
const aprovarAluno = (stringAluno) => {
for (var aluno in alunosDaEscola) {
    if(alunosDaEscola[aluno].nome === stringAluno) {
        if (alunosDaEscola[aluno].cursos.length > 0) {
            if (alunosDaEscola[aluno].faltas < 4) {
                soma = alunosDaEscola[aluno].notas.reduce(function(acumulado, nota){
                    return acumulado + nota})
                if (soma / alunosDaEscola[aluno].notas.length > 7){
                    console.log("Aluno aprovado: ")
                    return alunosDaEscola[aluno]}
                else {
                    console.log("Aluno reprovado por notas.")
                }
            }
            else {
            console.log("Aluno reprovado por faltas.")
            }
        }
        else {
            console.log("Aluno não matriculado.")
        }

    }
    else {
    console.log("Não há registros com este nome.")
    }
}
}
