//Ask the user to enter numbers until they enter 0. At the end, display the highest number entered.
console.log('Boas-vindas!')

let numero = Number(prompt('Insira um número qualquer:'));
let maiorNumero = numero;

while ( numero !== 0) {
  numero = Number(prompt('Insira um número qualquer:'));

  if (numero > maiorNumero && numero !== 0) {
    maiorNumero = numero;
  }
}

alert(`O maior número inserido antes do '0' foi: ${maiorNumero}`);