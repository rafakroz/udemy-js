
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green'];

const btn = document.getElementById('btn');

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
    document.body.style.background = colors[2];
    const randomColor = getRandomColor();
    console.log(randomColor);
})

// console.log(colors);

/*
Função para gerar números aleatórios
Como são gerados números quebrados, ao multiplicar por 10, o limite será até 10
*/
function getRandomColor() {
    return Math.random() * 10;
};