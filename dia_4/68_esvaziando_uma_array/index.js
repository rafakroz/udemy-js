console.log('Seção 5: Dia 4 - Aula 68');
console.log('Esvaziando uma Array');
console.log('-----------------------');

/*
*/

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Primeira forma: num = []')

num1 = [];

console.log(num1);

// ------------

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Segunda forma: length = 0')

num2.length = 0;

console.log(num2);

// ------------

let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Terceira forma: splice, com a quantidade por length')

num3.splice(0, num3.length);

console.log(num3);