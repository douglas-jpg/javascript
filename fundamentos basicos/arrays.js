let numeros = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let nomes = ["joão filho", "evelyn", "davi", "leticia", "yuri", "vinicius", "cesar", "douglas"];

// adicionar e remover no  fim
nomes.pop()
nomes.push("eduardo");
console.log(nomes);

// adicionar e remover no inicio
numeros.shift();
numeros.unshift(0);
console.log(numeros);

//copiar uma lista
let amigos = [...nomes];
console.log(amigos);

// sort
// Ordena o array
nomes.sort();
console.log(nomes);

// slice
// Retorna uma parte do array, sem modificar o array original(não conta  o ultimo)
nomes.slice(2, 6) // ["davi", "leticia", "yuri", "vinicius"]

// for each
// Executa uma função de callback para cada elemento do array
numeros.forEach(function(numero) {
    console.log(numero);
});

// Map
// Cria um novo array com os resultados de retorno de uma função para cada elemento do array
let dobro = numeros.map((numero) => {
    return numero * 2;
});
console.log(dobro); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 0]


// Filter
// Cria um novo array com os elementos que passam em um teste especificado por uma função
let pares = numeros.filter((numero) => {
    return numero % 2 === 0;
});
console.log(pares); // [0, 2, 4, 6, 8]

// Find
// Retorna o primeiro elemento do array que satisfaz uma condição especificada por uma função
let menor = nomes.find((nome) => {
    return nome.length <= 4;
})
console.log(menor); // davi

// indexOf e lastIndexOf
// Retornam o índice da primeira/última ocorrência de um elemento no array
nomes.indexOf("evelyn"); // 1
nomes.lastIndexOf("vinicius"); // 5

// includes 
// Verifica se um array inclui um determinado elemento e retorna true ou false
nomes.includes("douglas"); // false
nomes.includes("davi"); // true


// some e every 
// some verifica se pelo menos um elemento satisfaz uma condição
numeros.some((numero) => {
    return numero > 2 // retorna true ou false
})

// every verifica se todos os elementos satisfazem uma condição
numeros.some((numero) => {
    return numero < 10 // retorna true ou false
})

// reduce e reduceRight
// reduce aplica uma função acumuladora a cada elemento do array retornado um unico valor
let soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0) // o valor inicial do acumulador é 0 (segundo parametro do reduce)

// reduceRight a mesma coisa so que começa da direita para a esquerda