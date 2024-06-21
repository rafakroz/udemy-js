console.log('Seção 6: Dia 5 - Aula 81');
console.log('Configurando parâmetros defaul');
console.log('-----------------------');

/*
*/

// 

function financiamento1 (valor, juros, tempoAnos) {

    // return (valor * (juros / 100)) * tempoAnos;

    return valor + (valor * (juros / 100)) * tempoAnos;

}

console.log(financiamento1(1000, 10, 5));


// Definindo valores default

function financiamento2 (valor, juros = 15, tempoAnos = 5) {

    // return (valor * (juros / 100)) * tempoAnos;

    return valor + (valor * (juros / 100)) * tempoAnos;

}

console.log(financiamento2(1000));