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

    function addAluno(nome = '',curso=[],notas=[],faltas=0){
        this.nome = nome;
        this.cursos = curso;
        this.notas = notas;
        this.faltas = faltas;
        return {nome,cursos,notas,faltas}
    }
    if(alunosDaEscola.push(addAluno(nome))) {
        console.log(`Aluno ${nome} adicionado com sucesso!`)
    } else {
        console.log(`Ocorreu um erro ao adicionar o aluno ${nome}`)
    }
}
adicionarAluno('Xpto')
// --
function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    for(aluno of alunosDaEscola){
        console.log('-'.repeat(15))
        console.log(`Aluno: ${aluno.nome}`);
        if(aluno.cursos.length > 0){
            console.log('  - Cursando: ')
            for(curso of aluno.cursos){
                console.log("    * " + curso.nomeDoCurso + " - matriculado em "+curso.dataMatricula)
            }
        }else {  
            console.log("  - Aluno não está matriculado em nenhum curso.")
        }
        if(aluno.notas.length > 0 ){
            console.log("  - Notas recebidas: " + 
                aluno.notas.slice(0,-1).join(', ') + ' e ' + aluno.notas.slice(-1)
            )
        } else {
            console.log('  - Aluno não recebeu nenhuma nota ainda')
        }
            console.log(`  - Total de faltas no periodo: ${aluno.faltas}`)
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
