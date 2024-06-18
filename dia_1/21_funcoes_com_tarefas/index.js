console.log('Seção 2 - Aula 21');
console.log('Funções com tarefas');
console.log('-----------------------');

/*
Variáveis por referência:

Objects
Array
Functions

*/

// Criando a função
function saleStatusA() {
    console.log('Aprovado!');
}

// Invocando o função
saleStatusA();

// ----------------------------------------------

// Passando parâmetro na função
function saleStatusB(status) {
    console.log('Transação ' + status);
}

// Passando o argumento
saleStatusB('aprovada!');

// ----------------------------------------------

// Passando mais parâmetros na função
function saleStatusC(status, total) {
    console.log('Transação ' + status + '! Preço total $' + total);
}

// Passando o argumento
saleStatusC('aprovada', 30);