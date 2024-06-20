console.log('Seção 5: Dia 4 - Aula 66');
console.log('Utilizando a Arrow Function');
console.log('-----------------------');

/*
*/

// Array com objetos
const movies = [
    {id: 1, movieName: 'O Senhor dos Anéis'},
    {id: 2, movieName: 'De Volta para o Futuro'},
    {id: 3, movieName: 'Inception'}
]

console.log('Utilizando includes:');
// Não vai localizar, pois tem informações por referência
console.log(movies.includes({id: 1, movieName: 'O Senhor dos Anéis'}));

//

console.log('Utilizando find com função:');

let buscarItem1 = 'Inception';

// É preciso criar uma função para conseguirmos localizar o item
console.log(movies.find(
    function(movie) {
        return movie.movieName == buscarItem1;
    }
));

//

console.log('Utilizando find arrow:');

let buscarItem2 = 'De Volta para o Futuro';

// Alterando a função
console.log(movies.find(movie => movie.movieName == buscarItem2));