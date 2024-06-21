

function update() {

    let conta = Number(document.getElementById('yourBill').value);
    let percentual = document.getElementById('tipInput').value;
    let divisao = document.getElementById('splitInput').value;

    // exibindo os valores
    // console.log(conta, percentual, divisao);

    // Ao envolver com {}, exibe os inputs e os valores
    // console.log({conta, percentual, divisao});

    let valorGorjeta = conta * (percentual / 100);

    let contaTotal = conta + valorGorjeta;

    let valorCada = contaTotal / divisao;

    console.log(valorCada);
};