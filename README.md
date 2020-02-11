# DH Fullstack - Desafio Javascript I

 - Tema: Sistema escolar
 - Tecnologia: Javascript

 O desafio consiste na criação de um sistema para atender o gerenciamento de uma escola. Será desenvolvido funções como registro de alunos, matriculas e afins.

 O sistema deverá ser elaborado utilizando a linguagem  Javascript, se atentando aos padrões de desenvolvimento como, por exemplo, a utilização do camelCase. Todos os prints ou exibições deverão acontecer diretamente no console.

 ### Forma de entrega
 Você deverá fazer um fork desse projeto, e fazer o desenvolvimento dentro do mesmo. Após isso, deverá enviar para o professor o link do *SEU* repositório. Se atente para enviar pelo meio de comunicação escolhido para a turma.

 Para mais informações de como fazer um fork:
 <http://gabsferreira.com/forkando-e-clonando-um-repositorio-no-github>

 Além disso, esse exercício deverá ser feito de forma individual poderemos avaliar sua evolução no curso, e proporcionar a você uma auto-avaliação.


 ### O que deverá ser desenvolvido?

 Dentro do arquivo `index.js` desse repositório, há uma lista de alunos base. Em nosso sistema, um aluno é descrito com as seguintes informações:

  - Nome
  - Curso
  - Faltas
  - Notas

  Em que um curso é descrito como:

  - Nome do curso
  - Data de Matricula

  Diante disso, deverá ser desenvolvido as seguintes funções:
 ```javascript
  function adicionarAluno(nome:string){
  
  /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
  E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
  A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
  }
 
  function listarAlunos(){
  /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
  Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
  }
  function buscarAluno(nome:string){
  /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
}
  function matricularAluno(aluno:object, curso:string){
  /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
  Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
  Lembre-se de exibir o feedback para o usuário. */
}
  function aplicarFalta(aluno:object){
  /*
   Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
  */
  }
  
  function aplicarNota(aluno:object){
  /*
   Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
  */
}

   function aprovarAluno(aluno:object){
   /* 
   Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
   Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
   */
   }
   ```

### Links utéis
   - [Documentação JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
   - [Dicas de Map, Filter e Reduce](https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/)
   - [Objetos Literais JS](https://tableless.com.br/javascript-objetos-literais-vs-funcoes-construtoras/)



    

    

