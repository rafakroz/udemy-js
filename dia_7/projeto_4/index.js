let computerNumber;

let userNumbers = [];

function init() {
    // gerando o número de 1 a 100
    // Por iniciar com 0, +1 determinar que irá até 100
    computerNumber = Math.floor(Math.random() * 100 + 1);
    console.log(computerNumber)
};

function compareNumbers() {
    // capturando o número selecionado no input
    const userNumber = Number(document.getElementById('inputBox').value);

    // inserindo o numero selecionado no array userNumbers
    userNumbers.push(' ' + userNumber);

    // o número é inserido no array e exibido no campo de chutes
    document.getElementById('guesses').innerHTML = userNumbers;
}