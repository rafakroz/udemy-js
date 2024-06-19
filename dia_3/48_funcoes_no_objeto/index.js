console.log('Seção 4: Dia 3 - Aula 47');
console.log('Criando um Objeto');
console.log('-----------------------');

/*
let bookTitle = 'Hábitos Atômicos';
let bookAuthor = 'James Clear';
let booPages = 306;

Todas as informações, estão relacionadas a um livro. 
Desta maneira, criamos um objeto com suas propriedades.
*/

const book = {

    bookTitle: 'Hábitos Atômicos',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentos',
        chap2: 'Primeira lei'
    },

    printBook: function(){

        console.log('Imprimindo...');

    }
};

// Imprindo o autor no console
console.log(book.bookAuthor);

// Imprimindo o capítulo 1 no console
console.log(book.bookChapters.chap1);

// Invocando a função printBook
book.printBook();