const nome = [
  "Miguel",
  "Arthur",
  "Gael",
  "Théo",
  "Heitor",
  "Ravi",
  "Davi",
  "Bernardo",
  "Noah",

  "isaque",
  "Gabriel",

  "Luisa",
  "Isabel",
  "Helena",
  "Alice",
  "Laura",
  "Maria Alice",
  "Sophia",
  "Manuela",
  "Maitê",
  "Liz",
  "Cecília",
  "Isabella",
];

console.log("Tamanho do array", nome.length);

const sala1 = nome.slice(0, nome.length / 2);

const sala2 = nome.slice(nome.length / 2);

console.log(`Alunos da sala 1 ${sala1}`);
console.log(sala1.length);
console.log(`Alunos da sala 2 ${sala2}`);
console.log(sala2.length);
