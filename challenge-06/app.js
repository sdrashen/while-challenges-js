//Make a program using a `while` loop that allows the user to perform addition calculations as long as they want.
console.log('Boas-vindas!');

let continuar = true;

while (continuar) {
  let numero1 = Number(prompt('Insira um número:'));
  let numero2 = Number(prompt('Insira outro número:'));

  let soma = numero1 + numero2;
  alert(`O resultado da soma é: ${soma}`);

  let resposta = prompt('Deseja realizar outra soma? Digite "1" para Sim ou "0" para Parar.');

  if (resposta !== "1") {
    continuar = false;
    alert('Programa finalizado.');
  }
}
