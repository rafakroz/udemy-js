console.log('Seção 5: Dia 4 - Aula 64');
console.log('Adicionando valores a uma array');
console.log('-----------------------');

/*
*/

const num = [4, 7];

console.log(num);

// push, para adicionar elementos no final do array
num.push(8, 9, 10);

console.log(num);

// unshift, para adicionar elementos no início do array
num.unshift(1, 2, 3);

console.log(num);

const num2 = [4, 7];

/*
splice: Inserindo dados dentro de um intervalor
1: índice inicial
0: quantos itens serão deletados
5, 6: itens inseridos
*/

num2.splice(1,0, 5, 6);

console.log(num2);