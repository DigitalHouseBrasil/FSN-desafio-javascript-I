// Base a ser utilizada
const alunosDaEscola = [{nome:"Henrique", notas:[], cursos:[], faltas:5}, 
{nome:"Edson", notas:[], cursos:[], faltas:2}, 
{nome:"Bruno", notas:[10,9.8,9.6], cursos:[], faltas:0}, 
{nome:"Guilherme", notas:[10,9.8,9.6], cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}], faltas:0}, 
{nome:"Carlos", notas:[], cursos:[], faltas:0}, 
{nome:"Lucca", notas:[10,9.8,9.6], cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}], faltas:0}];

// implementação

// function adicionarAluno
const adicionarAluno = nomeAluno => {
    alunosDaEscola.push({nome: nomeAluno, notas: [], cursos: [], faltas: 0});
    return alunosDaEscola.length > 6 ? console.log('Registrado!') : ' ';
};
adicionarAluno('Maria');
console.log('--------------------------------------');

//function listarAlunos(){
const listarAlunos = () => alunosDaEscola.forEach(alunos => console.log(alunos));

listarAlunos();
console.log('--------------------------------------');

//function buscarAluno(nome:string)
const buscarAluno = (nomeAluno) => {
    let aluno = alunosDaEscola.filter(alunos => alunos.nome.indexOf(nomeAluno) !== -1);
    if (aluno.length !== 0){
        console.log ('Registrado');
        console.log(aluno);                               
    } else {
        console.log('Não existe');                
    }        
};  
buscarAluno('Maria');
console.log('--------------------------------------');

//function matricularAluno(aluno:object, curso:string)
const matricularAluno = (nomeAluno, curso) => {
    let aluno = alunosDaEscola.filter(alunos => alunos.nome.indexOf(nomeAluno) !== -1);
        if (aluno.length !== 0){
            aluno.filter(fulano => {
                if(fulano.nome === nomeAluno){
                    fulano.cursos = [{nomeDoCurso: curso, dataMatricula: new Date}];
                    console.log('Matriculado');
                    console.log(fulano);                    
                } else {
                    console.log('Aluno não encontrado');
                }
            });
        }                   
};
matricularAluno('Maria', 'Web');
console.log('--------------------------------------');

// function aplicarFalta(aluno:object)
const aplicarFalta = (nomeAluno) => {
    let aluno = alunosDaEscola.filter(alunos => alunos.nome.indexOf(nomeAluno) !== -1);
    if (aluno.length !== 0){
        aluno.filter(fulano => {
            if(fulano.nome === nomeAluno){
                fulano.faltas += 1;
                console.log('Falta ok');
                console.log(fulano);
            } else {
                console.log('Aluno não registrado');
            }
        });
    }            
};
aplicarFalta('Maria');
console.log('--------------------------------------');

//function aplicarNota(aluno:object, nota)    
const aplicarNota = (nomeAluno, nota) => {
    let aluno = alunosDaEscola.filter(alunos => alunos.nome.indexOf(nomeAluno) !== -1);
    if (aluno.length !== 0){
        aluno.filter(fulano => {
            if (fulano.nome === nomeAluno){
                fulano.notas = [nota];
                console.log('Nota ok');
                console.log(fulano);
            } else {
                console.log('Aluno não registrado');
            }
        });
    }    
}
aplicarNota('Maria', 9);
console.log('--------------------------------------');
//function aprovarAluno(aluno:object)
const aprovarAluno = (nomeAluno) => {
    let aluno = alunosDaEscola.filter(alunos => alunos.nome.indexOf(nomeAluno) !== -1);         
    if (aluno.length !== 0){
        aluno.filter(fulano => {
            if(fulano.nome === nomeAluno){
                let media = fulano.notas.reduce((soma, nota) => soma += nota, 0) / fulano.notas.length;
                if(fulano.faltas <= 3 && media >= 7){
                    console.log('aprovado');
                    console.log(fulano);                    
                } else {
                    console.log('reprovado');
                }
            }
        });
    }        
}
aprovarAluno('Maria');
console.log('--------------------------------------');
