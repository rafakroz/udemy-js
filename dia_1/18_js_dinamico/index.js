console.log('Seção 2 - Aula 18');
console.log('JavaScript é dinâmico');
console.log('-----------------------');

/*
Typeof = exibe o tipo da variável

Ao alterar o dado, automaticamente o JS reconhece o novo tipo

*/

let itemName = 'Pen';
console.log('Nome do Produto:', typeof itemName);

let itemPrice = 3;
console.log('Preço do Produto:', typeof itemPrice);

let itemAvalable = true;
console.log('Produto disponível:', typeof itemAvalable);

let itemColor;
console.log('Cor do Produto:', typeof itemColor);

itemPrice = null
console.log('Preço do Produto:', typeof itemPrice);

// Novo valor 
itemPrice = 'teste';
console.log('Preço do Produto:', typeof itemPrice);
