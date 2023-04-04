const alunos = ["Joao", "Caio", "Paula", "Ana"];
const notas = [10, 8, 7, 6];

let listaDeNotasAlunos = [alunos, notas];

function exibirNomeENota(aluno) {
  if (listaDeNotasAlunos[0].includes(aluno)) {
    const [alunos, notas] = listaDeNotasAlunos;

    const indice = alunos.indexOf(aluno);

    const notaDoAluno = notas[indice];

    console.log(`${aluno} tem média ${notaDoAluno}`);
  } else {
    console.log("Aluno não cadastrado!");
  }
}
exibirNomeENota("Joao");
