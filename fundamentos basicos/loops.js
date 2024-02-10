// for 
for (let c = 0; c < 5; c++){
    console.log("for", c);
}

// while
let i = 0;
while (i < 4){
    console.log("while", i);
    i++;
}

// do while
let j = 0;
do {
  console.log("do while", j);
  j++;
} while (j < 5);

// for...in
const linguagens = {
    l1: "javascript",
    l2: "python",
    l3: "react",
    l4: "C",
}
// melhor ultilizar em objetos
for (let keys in linguagens){
    console.log("for in", keys);
}

// for of
// melhor ultilizar em arrays
const contagem = [4, 3, 2, 1];
for (let numeros of contagem){
    console.log("for of", numeros);
}

// for each
let cores = ["azul", "preto", "vermelho", "verde"];

cores.forEach((cor) => {
    console.log(cor);
});
