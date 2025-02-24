//Ask the user to enter a number and display its multiplication table from 1 to 10.

let numero = Number(prompt("Digite um número para ver a tabuada:"));
let multiplicador = 1;

while (multiplicador <= 10) {
  alert(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
  multiplicador++;
}

alert("Tabuada concluída!");
