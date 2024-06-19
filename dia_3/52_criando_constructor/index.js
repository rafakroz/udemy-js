console.log('Seção 4: Dia 3 - Aula 52');
console.log('Criando um Constructor');
console.log('-----------------------');

/*
*/

// Factory para criação do objeto

function CreateBook(title, author, pages){
    
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;

};

const book1 = new CreateBook('Hábitos Atômicos', 'James Clear', 306);

console.log(book1);

// console.log(window.createBook);