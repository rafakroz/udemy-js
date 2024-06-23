
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Black', 'Brown', 'Gray', 'navy', '#544212'];

const btn = document.getElementById('btn');

// querySelector, definindo a class, ao invés de um id
const color = document.querySelector('.color');

/*
btn.addEventListener: evento que monitora o btn
'click': a função será chamada com o evento click no botão

documento: no documento
body: no body
style: altera o style
background: do background
colors[]: para a cor do index x

*/
btn.addEventListener('click', function(){
    const randomColor = getRandomColor();
    document.body.style.background = colors[randomColor];
    console.log(randomColor);
    // textContent: insere o valor à variável
    color.textContent = colors[randomColor];
})

/*
Função para gerar números aleatórios

Math.floor: limita para números inteiros
Math.random: gera números aleatórios
* colors.lenght: limita os números para o tamanho do array
*/
function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
};