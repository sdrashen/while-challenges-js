//Create a program that asks the user for a number and displays a countdown to 0.
console.log('Boas-vindas!')

let number = Number(prompt('Insira qulaquer número maior que nove:'));

while (number > 0) {
    console.log(number)
    number--;
}