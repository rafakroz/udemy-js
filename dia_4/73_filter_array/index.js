console.log('Seção 5: Dia 4 - Aula 73');
console.log('Filtrando uma Array com o filter');
console.log('-----------------------');

/*
*/

const tempLondon = [18, 13, 8, 2, -5, 0, -2];

/*
const tempPositive = tempLondon.filter(
    function(value) {
        return value >= 0;
    }
);
*/

// Usando filter e arrow function

const tempPositive = tempLondon.filter(value => value >= 0);

console.log('Temperaturas positivas: ' + tempPositive);

const tempNegative = tempLondon.filter(value => value < 0);

console.log('Temperaturas negativas: ' + tempNegative);
