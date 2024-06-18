console.log('Seção 3: Dia 2 - Aula 29');
console.log('Operadores Lógicos');
console.log('-----------------------');

/*
Operadores Lógicos

AND > e > &&
OR > ou > ||
NOT > não > !

*/

let temIdadeMinima1 = true;
let temTituloEleitor1 = true;

let podeVotar1 = temIdadeMinima1 && temTituloEleitor1;

console.log('Pode votar: ' + podeVotar1);

//-

let temIdadeMinima2 = false;
let temTituloEleitor2 = true;

let podeVotar2 = temIdadeMinima2 && temTituloEleitor2;

console.log('Pode votar: ' + podeVotar2);

//-----------------------------

let temIdadeMinima3 = true;
let temTituloEleitor4 = false;

let podeVotar3 = temIdadeMinima3 || temTituloEleitor4;

console.log('Pode votar: ' + podeVotar3);

//-----------------------------

let podeViajar = !podeVotar3;

console.log('Pode viajar: ' + podeViajar);