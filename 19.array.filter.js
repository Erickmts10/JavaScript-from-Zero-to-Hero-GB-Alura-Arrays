const alunos = ["Ana", "Marcos", "João", "Maria"];

const notas = [7, 4.5, 8, 7.5];

const reprovador = alunos.filter((_, indice) => {
  return notas[indice] >= 7;
});

console.log(reprovador);
