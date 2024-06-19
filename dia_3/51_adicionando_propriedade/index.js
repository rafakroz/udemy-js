console.log('Seção 4: Dia 3 - Aula 51');
console.log('Adicionando Propriedade');
console.log('-----------------------');

/*
Adicionando propriedade ao objeto.
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

    return book; // retorno para o objeto

};

const book1 = createBook('Hábitos Atômicos', 'James Clear', 306);

book1.bookColor = 'White';

console.log(book1);

const book2 = createBook('Pense e Enriqueça', 'Napoleon Hill', 253);

console.log(book2);

// console.log(window.createBook);