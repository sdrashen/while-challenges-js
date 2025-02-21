//Create a program that asks the user to enter a password. 
// While the password is not "1234", keep asking. 
// When the user enters the correct password, display "Access granted!".
console.log('Boas-vindas!')

let senha = 1234;
let numero = Number(prompt('Insira uma senha de quatro números em sequência e sem repetir os números:'));

while ( numero != senha ) {
  alert('Tente novamente.');
  numero = Number(prompt('Insira uma senha de quatro números em sequência e sem repetir os números:'));
}

alert('Acesso concedido!');