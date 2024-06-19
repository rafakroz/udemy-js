console.log('Seção 3: Dia 2 - Aula 39');
console.log('Adicionando o break no While Loop');
console.log('-----------------------');

/*
*/

i = 1; // variável externa

while (i <=10) {

    if (i === 8) {
        break; // solicitação de parada do loop
    }

    console.log('(While) Número ', i);

    i++;
}