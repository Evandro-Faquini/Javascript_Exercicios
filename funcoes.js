
function calcular() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let op = document.getElementById('operacao').value;
    let resultado = null;

    if (op == 'soma') {
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao'){
        resultado = subtrair(n1,n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'multiplicacao'){
        resultado = multiplicar(n1, n2)
        resultado = resultado.toFixed(2);

    }else if(op == 'divisao'){
        if(n2 == 0){
            resultado = 'Não é um número'
        }else{
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
        
    }else{
        resultado = 'Operacão Inválida';
    }
    
    //console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;
}

function somar(valor1, valor2) {
    return valor1 + valor2;
}

function subtrair(valor1, valor2) {
    return valor1 - valor2;
}
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}
function dividir(valor1, valor2) {
    if(valor2 ==0){
        return 'Não é um número'
    }
    return valor1 / valor2;
}
