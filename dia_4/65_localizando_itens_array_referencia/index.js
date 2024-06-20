console.log('Seção 5: Dia 4 - Aula 65');
console.log('Localizando itens a uma Array de referência');
console.log('-----------------------');

/*
*/

// Array com objetos
const movies = [
    {id: 1, movieName: 'Senhor dos Anéis'},
    {id: 2, movieName: 'De Volta para o Futuro'},
    {id: 3, movieName: 'Inception'}
]

// Não vai localizar, pois tem informações por referência
console.log(movies.includes({id: 1, movieName: 'Senhor dos Anéis'}));

//

let buscarItem = 'Inception';

// É preciso criar uma função para conseguirmos localizar o item
console.log(movies.find(
    function(movie) {
        return movie.movieName == buscarItem;
    }
));