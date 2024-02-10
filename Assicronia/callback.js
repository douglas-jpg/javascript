// callback de formas sincronas 

let exibir = (resultado) => {
    console.log("O resulado é: " + resultado);
}

// ultilizando uma função por meio de argunmento
// passando a função (callback) como parametro e ultiliza ela dentro do codigo 
function soma(a, b, callback) {
    let operacao = a + b;
    callback(operacao);
}

function multiplicacao(a, b, cb) {
    let operacao = a * b;
    cb(operacao);
}

soma(1, 2, exibir);
multiplicacao(2, 4, exibir);