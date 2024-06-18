console.log('Seção 3: Dia 2 - Aula 30');
console.log('Operadores Lógicos com Strings');
console.log('-----------------------');

/*
Operadores Lógicos com Strings

AND > e > &&
OR > ou > ||
NOT > não > !

*/

//let corCliente = 'Black';
let corCliente = undefined;
let corEstoque = 'Red';
let corVendida = corCliente || corEstoque;

console.log('Cor vendida: ' + corVendida);

/*
Neste caso, o OR, define a primeira cor como selecionada, pois ambas foram definidas.

Ao alterar a primeira cor para indefinida, a cor selecionada passoun a ser a segunda.
*/