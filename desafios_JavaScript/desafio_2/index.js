
let valorProduto = Number(prompt('Digite o valor do produto:'));
console.log(valorProduto);

// Ver tipo da variável
//console.log(typeof(valorProduto));

if (valorProduto >= 20) {

    document.getElementById('resultado').innerHTML = 'Aprovado!';

} else {

    document.getElementById('resultado').innerHTML = 'Recusado!';

}