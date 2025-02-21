//Ask the user to enter numbers. Keep summing these numbers until the user enters a negative number. When that happens, display the total sum.
console.log('Boas-vindas!')

let number = Number(prompt('Insira um número:'));
let total = 0;

while ( number >= 0) {
  total += number;
  number = Number(prompt('Insira outro número:'));
}

console.log(`A soma total dos números inseridos é: ${total}`);