const prompt = require("prompt-sync")({ sigint: true });

let quantidade = parseFloat(prompt("Digite a quantidade de patinhos: "));

while (isNaN(quantidade) || !Number.isInteger(quantidade) || quantidade <= 0) {
  quantidade = parseFloat(
    prompt(
      "Digite um valor numérico inteiro positivo para a quantidade de patinhos: "
    )
  );
}

for (i = 0; i < quantidade; i++) {
  if (quantidade - i > 1) {
    console.log(`${quantidade - i} patinhos foram passear`);
  } else {
    console.log(`${quantidade - i} patinho foi passear`);
  }

  console.log("Além das montanhas para brincar");
  console.log("A mamãe gritou, quá, quá, quá, quá");

  if (quantidade - (i + 1) > 1) {
    console.log(`Mas só ${quantidade - (i + 1)} patinhos voltaram de lá`);
  } else if (quantidade - (i + 1) === 1) {
    console.log(`Mas só ${quantidade - (i + 1)} patinho voltou de lá`);
  } else {
    console.log("Mas nenhum patinho voltou de lá.");
  }
  console.log("");
}

console.log("A mamãe patinha foi procurar");
console.log("Além das montanhas na beira do mar");
console.log("A mamãe gritou: Quá, quá, quá, quá");
console.log(`E os ${quantidade} patinhos voltaram de lá.`);
