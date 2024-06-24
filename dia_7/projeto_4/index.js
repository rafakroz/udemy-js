let computerNumber;

let userNumbers = [];

function init() {
    // gerando o número de 1 a 100
    // Por iniciar com 0, +1 determinar que irá até 100
    computerNumber = Math.floor(Math.random() * 100 + 1);
    console.log(computerNumber)
};

function compareNumbers() {
    // Capturando o número selecionado no input
    const userNumber = Number(document.querySelector('#inputBox').value);

    // Inserindo o numero selecionado no array userNumbers
    userNumbers.push(' ' + userNumber);

    // O número é inserido no array e exibido no campo de chutes
    document.querySelector('#guesses').innerHTML = userNumbers;

    // Efetuando a comparação dos números
    if (userNumber > computerNumber && (Math.abs((userNumber - computerNumber)) >= 20)) {
        document.querySelector('#textOutput').innerHTML = 'Seu número é muito alto!';
        document.querySelector('#inputBox').value = '';
    }
    else if (userNumber > computerNumber && (Math.abs((userNumber - computerNumber)) >= 10)){
        document.querySelector('#textOutput').innerHTML = 'Seu número está alto!';
        document.querySelector('#inputBox').value = '';
    }
    else if (userNumber > computerNumber && (Math.abs((userNumber - computerNumber)) == 1)){
        document.querySelector('#textOutput').innerHTML = 'Seu número está bem próximo!';
        document.querySelector('#inputBox').value = '';
    }
    else if (userNumber > computerNumber && (Math.abs((userNumber - computerNumber)) < 10)){
        document.querySelector('#textOutput').innerHTML = 'Seu número está próximo!';
        document.querySelector('#inputBox').value = '';
    }
    else if (userNumber < computerNumber && (Math.abs((userNumber - computerNumber)) >= 20)) {
        document.querySelector('#textOutput').innerHTML = 'Seu número é muito baixo!';
        document.querySelector('#inputBox').value = '';
    }
    else if (userNumber < computerNumber && (Math.abs((userNumber - computerNumber)) >= 10)){
        document.querySelector('#textOutput').innerHTML = 'Seu número está baixo!';
        document.querySelector('#inputBox').value = '';
    }
    else if (userNumber < computerNumber && (Math.abs((userNumber - computerNumber)) == 1)){
        document.querySelector('#textOutput').innerHTML = 'Seu número está bem próximo!';
        document.querySelector('#inputBox').value = '';
    }
    else if (userNumber < computerNumber && (Math.abs((userNumber - computerNumber)) < 10)){
        document.querySelector('#textOutput').innerHTML = 'Seu número está próximo!';
        document.querySelector('#inputBox').value = '';
    }
    else {
        document.querySelector('#textOutput').innerHTML = 'Parabéns! Você acertou!';
    }
}