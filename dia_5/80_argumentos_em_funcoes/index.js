console.log('Seção 6: Dia 5 - Aula 80');
console.log('Utilizando os Argumentos em Funções');
console.log('-----------------------');

/*
*/

// A função espera que sejam passados 2 argumentos [no exemplo]

function price1(a, b){
    return a + b;
}

// exibindo no console
console.log(price1(10, 5));

// Resultado NaN [Not a Number], pois como não foi passado o segundo argumento
// ele considerou como undefinied: 5 + undefinied
console.log(price1(10));

// Irá considerar apenas os 2 primeiros argumentos
console.log(price1(10, 5, 30, 40));


/*
Neste, usando o for, com arguments, haverá a soma de todos os argumentos passados.

Cada vez que o FOR rodar, value passará a ser um novo argumento passado.

Ao total, será somando cada valor por vez.

*/

function price2(a, b) {
    
    let total = 0;
    
    for (let value of arguments) {
        
        total += value;
        
    }

    return total;
    
}

console.log(price2(10, 5, 30, 40));


// É possível não informar os argumento na função

function price3() {
    
    let total = 0;
    
    for (let value of arguments) {
        
        total += value;
        
    }

    return total;
    
}

console.log(price3(10, 5, 30, 40));

