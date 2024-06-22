function formatarValor(value) {

    // redondando os centavos para cima
    value = Math.ceil(value * 100) / 100;

    // fixando 2 casas decinmais
    value = value.toFixed(2);

    return 'R$ ' + value;

};

function formatarSplit(value) {

    if (value == 1) {
        return value + ' pessoa';
    } else {
        return value + ' pessoas';
    }

}

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

    document.getElementById('tipPercent').innerHTML = percentual + '%';
    document.getElementById('tipValue').innerHTML = formatarValor(valorGorjeta);
    document.getElementById('totalWithTip').innerHTML = formatarValor(contaTotal);
    document.getElementById('splitValue').innerHTML = formatarSplit(divisao);
    document.getElementById('billEach').innerHTML = formatarValor(valorCada);
};