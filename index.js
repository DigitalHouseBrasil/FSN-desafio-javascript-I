// Base a ser utilizada
const alunosDaEscola=[
    {
        nome:"Henrique",
        notas:[],
        cursos:[],
        faltas:5
    },
    {
        nome:"Edson",
        notas:[],
        cursos:[],
        faltas:2
    },
    {
        nome:"Bruno",
        notas:[10,9.8,9.6],
        cursos:[],
        faltas:0
    },
    {
        nome:"Guilherme",
        notas:[10,9.8,9.6],
        cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
        faltas:0},
    {
        nome:"Carlos",
        notas:[],
        cursos:[],
        faltas:0
    },
    {
        nome:"Lucca",
        notas:[10,9.8,9.6],
        cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],
        faltas:0
    }
];


// implementação

function adicionarAluno(nome){
 
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

    function addAluno(nome,curso=[],notas=[],faltas=0){
        this.nome = nome;
        this.cursos = curso;
        this.notas = notas;
        this.faltas = faltas;
        return {nome,cursos,notas,faltas}
    }
    
    if(alunosDaEscola.filter( aluno => aluno.nome === nome).length > 0 ){
        console.log(`Já existe cadastro para o aluno ${nome}`)
    } else if(alunosDaEscola.push(addAluno(nome))) {
        console.log(`Aluno ${nome} adicionado com sucesso!`)
    } else {
        console.log(`Ocorreu um erro ao adicionar o aluno ${nome}`)
    }
}
adicionarAluno('Xpto');
adicionarAluno('Xpto');

function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

    for(aluno of alunosDaEscola){
        console.log('-'.repeat(15))
        console.log(`Aluno: ${aluno.nome}`);
        if(aluno.cursos.length > 0){
            console.log('  * Cursando: ')
            for(curso of aluno.cursos){
                console.log("    - " + curso.nomeDoCurso + " - matriculado em "+
                    curso.dataMatricula.toLocaleString('pt-BR')
                )
            }
        }else {  
            console.log("  * Aluno não está matriculado em nenhum curso.")
        }

        // Printa notas
        if(aluno.notas.length > 0 ){
            console.log("  * Notas recebidas: " + 
                aluno.notas.slice(0,-1).join(', ') + ' e ' + aluno.notas.slice(-1)
            )
        } else {
            console.log('  * Aluno não recebeu nenhuma nota ainda')
        }

        // Lista total de faltas 
        console.log(`  * Total de faltas no periodo: ${aluno.faltas}`)
    }
}

listarAlunos()

function buscarAluno(nome){
//     /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. 
//     Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não 
//     encontrar. E deverá devolver um aluno em seu retorno. */
    
    const resultado = alunosDaEscola.filter(aluno => aluno.nome.includes(nome))
    if(resultado) {
        console.log(`Aluno ${nome} encontrado...`)
        return resultado[0]
    } else{
        console.log(`Aluno ${nome} não encontrado...`)
        return false
    }   
}

console.log(buscarAluno('Xpto'))

function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, 
    e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */

    if(typeof aluno === 'object' && typeof curso === 'string'){

        if(aluno.cursos.filter(c => c.nomeDoCurso == curso).length > 0) {
            console.log(`Aluno ${aluno.nome} já está matriculado no curso ${curso}.`)
            return false
        } else if (aluno.cursos.push({
            nomeDoCurso: curso,
            dataMatricula: new Date
        })) {
            console.log(`Aluno ${aluno.nome} matriculado no curso ${curso}.`)
            return true
        } else {
            console.log(`Ocorreu um erro para matricular o aluno ${aluno.nome}`)
            return false
        }
    } else {
        console.log("Dados informaos incorretos")
        return false
    }
}

console.log(matricularAluno(buscarAluno('Xpto'),"UX"))
console.log(matricularAluno(buscarAluno('Xpto'),"UX"))
console.log(listarAlunos())

function aplicarFalta(aluno){
    // aluno:object
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá 
     incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir 
     a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado 
     em um curso.
    */
}

function aplicarNota(aluno){
    // aluno:object
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá 
     adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um 
     feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo 
     tiver matriculado em um curso.
    */
}

function aprovarAluno(aluno){
    // aluno:object
    /* 
    Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se 
    o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 
    3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    */
}