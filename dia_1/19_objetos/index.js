console.log('Seção 2 - Aula 19');
console.log('Objetos');
console.log('-----------------------');

/*
Variáveis por referência:

Objects
Array
Functions

*/

let itemName = 'Pen';
let itemPrice = 3;
let itemAvailable = true;
let itemColor;

// Objeto

let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'red'
}

console.log(pen);

// Alterando valores

pen.itemColor = 'blue'

console.log(pen);

// Exibindo apenas o dados de interesse pelo console

console.log(pen.itemName);