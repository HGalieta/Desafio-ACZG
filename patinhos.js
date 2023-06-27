const prompt = require("prompt-sync")({ sigint: true });

let quantidade = prompt("Digite a quantidade de patinhos: ");

for (i = 0; i < quantidade; i++) {
  console.log(`${quantidade - i} patinhos foram passear`);
  console.log("além das montanhas para brincar");
  console.log("A mamãe gritou, quá, quá, quá, quá");
  if (quantidade - (i + 1) == 0) {
    console.log("Mas nenhum patinho voltou de lá.");
  } else if (quantidade - (i + 1) == 1) {
    console.log(`mas só ${quantidade - (i + 1)} patinho voltou de lá`);
  } else {
    console.log(`mas só ${quantidade - (i + 1)} patinhos voltaram de lá`);
  }
  console.log("");
}

console.log("A mamãe patinha foi procurar");
console.log("Além das montanhas na beira do mar");
console.log("A mamãe gritou: Quá, quá, quá, quá");
console.log(`E os ${quantidade} patinhos voltaram de lá.`);
