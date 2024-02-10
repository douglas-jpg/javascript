// destructuring com arrays
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// vai destruturar a lista em 3 variaveis
let [num1, num2, num3, ...resto] = arr;
console.log(num1, num2, num3);

// o operador ... pega o resto dos elementos da lista
// funciona tanto para listas como objetos
console.log(resto);

// Uma variavel pode ser atribuída de um padrão
// no caso em que o valor retirado do lista é undefined 
let a, b;
[a = 5, b = 7] = [1];
console.log(a, b);

// posso ignorar valores
let [c, , d] = arr;

console.log(c, d);

// com objetos
const pessoa = {
    nome: "douglas",
    profissao: "programador",
    idade: 19,
    peso: 69.55,
    altura: 1.69
};

// tem que ser o mesmo nome que esta no objeto
// se nao da udefined
let {peso, altura} = pessoa;
console.log(peso, altura);

// atrubuir com um nome novo
let {nome: nomeVar, idade: idadeVar} = pessoa;
console.log(nomeVar, idadeVar);

// posso atribuir valores padrão assim como em listas
let { e = 10, f = 5 } = { e: 3 };

console.log(e, f);

// qualquer coisa que possa ser interado eu posso usar o destructuring
let palavra = "douglas";
let [g, h, i] = palavra;
console.log(g, h, i);

// tomar cuidado
// se eu declarar a variavel e depois atribuir os elementos com um destructuring
// tem que ser entre parentese
let obj = {
    x: 10,
    y: 20
};

let j, k;

({x: j, y: k} = obj);
console.log(j, k)
