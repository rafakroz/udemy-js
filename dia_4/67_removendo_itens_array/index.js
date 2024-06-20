console.log('Seção 5: Dia 4 - Aula 67');
console.log('Removendo itens da Array');
console.log('-----------------------');

/*
*/

const num1 = [5, 6, 7, 8, 9, 10];
console.log('pop(): remove o último item do array');
const final1 = num1.pop();

console.log(num1);
console.log(final1);

// ----

const num2 = [5, 6, 7, 8, 9, 10];
console.log('shift(): remove o primeiro item do array');
const final2 = num2.shift();

console.log(num2);
console.log(final2);

// ----

const num3 = [5, 6, 7, 8, 9, 10];
console.log('splice(): remove itens do array a partir de index x');
const final3 = num3.splice(2, 3);

console.log(num3);
console.log(final3);

// ----
