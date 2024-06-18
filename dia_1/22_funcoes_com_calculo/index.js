console.log('Seção 2 - Aula 22');
console.log('Funções com cálculos');
console.log('-----------------------');

/*
Variáveis por referência:

Objects
Array
Functions

*/

// Criando a função
function percentage10(price){

    return price - (price * 10 / 100);

}

// Forma de exibir no console

let total = percentage10(20);
console.log(total);


// Impressão mais simples

console.log(percentage10(30));