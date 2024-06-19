console.log('Seção 4: Dia 3 - Aula 56');
console.log('Utilizando o template literals');
console.log('-----------------------');

/*
*/

const email1 = 'Boa tarde! O encontro está confirmado! Att. Rafael';

console.log(email1);

//-------------------------------------------------------------------------
// Quebra de linhas com \n
const email2 = 'Boa tarde! \nO encontro está confirmado! \nAtt. Rafael';

console.log(email2);

//-------------------------------------------------------------------------
// Alterar '' para ``, é possível quebra de linha com enter, sem \n
const email3 = `Boa tarde!
O encontro está confirmado!
Att. Rafael`;

console.log(email3);

//-------------------------------------------------------------------------
// Usando variáveis
let firstName = 'Rafael';

const email4 = 'Boa tarde! \nO encontro está confirmado! \nAtt. ' + firstName;

console.log(email4);

const email5 = `Boa tarde!
O encontro está confirmado!
Att. ${firstName}`;

console.log(email5);