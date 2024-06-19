console.log('Seção 3: Dia 2 - Aula 37');
console.log('For In Loop');
console.log('-----------------------');

/*
*/

// objeto
const myCar = {
    model: 'BMW',
    year: 2024,
    km: 10000
};

// loop
// Analisa informações e valores dentro de um objeto
for (let i in myCar){

    console.log(i, myCar[i]);

}

