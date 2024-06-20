console.log('Seção 5: Dia 4 - Aula 72');
console.log('Verificando elementos na Array');
console.log('-----------------------');

/*
*/

const tempLondon = [18, 13, 8, 2];

const tempPositive = tempLondon.every(
    function(value) {
        return value >= 0;
    }
);

console.log(tempPositive);
