console.log('Seção 4: Dia 3 - Aula 50');
console.log('Criando uma Factory');
console.log('-----------------------');

/*
*/

// Factory para criação do objeto

function createBook(title, author, pages){
    
    const book = {
    
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
    
        printBook: function(){
    
            console.log('Imprimindo...');
    
        }
    };

    return book;

};

const book1 = createBook('Hábitos Atômicos', 'James Clear', 306);

console.log(book1);

const book2 = createBook('Pense e Enriqueça', 'Napoleon Hill', 253);

console.log(book2);

// console.log(window.createBook);