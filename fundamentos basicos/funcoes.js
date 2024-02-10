// declarar funções
function nomeDaFuncao(parametro){
    return parametro;
}

nomeDaFuncao(teste);

//expressões de função
let funcao = function() {
    return "hello world";
}

//arrow function
let arrow = () => {
    return "função";
}

// parametros das funções
let parametros = function (parametroDefinido = "parametro definido"){
    return parametroDefinido;
}

let varios = function(...variosParametros){
    return variosParametros;
}
/*
varios(1, 2, 3, 4, 5)
varios(1, 2)
*/