// Promise 
/* as promises são assincornas ou seja, 
elas não esperam o fluxo do codigo
se tiver algo impedindo de execultar a promessa
a outra linha  sera execultada */ 

// Criando uma promise 
const myPromise = new Promise((resolve, reject) => {
    // resolve quando ela resolver a promessa
    // reject quando ela for rejeitado

    // faz um codigo para receber uma requisção externa 
    const nome = "douglas";

    // tratar os casos quando ela for aceita ou rejeitada
    if(nome == "douglas") {
        resolve("O nome do usuario é douglas");
    }else {
        reject("Promessa falida");
    }

})

myPromise
    // caso a promessa seja comprida
    .then((resultado) => {
        console.log(resultado);
    })
    // caso da promessa falida
    .catch((err) => {
        console.log(err);
    })

/* posso encadear os then
myPromise
    // caso a promessa seja comprida
    .then((resultado) => {
        return resultado.toUpperCase();
    })
    .then((stringModificada) => {
        console.log(stringModificada);
    })
    // caso da promessa falida
    .catch((err) => {
        console.log(err);
    })
*/

// Resolvendo varias promessas
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 ok");
    }, 2000)
})
const p2 = new Promise((resolve, reject) => {
    resolve("p2 ok");
})
const p3 = new Promise((resolve, reject) => {
    resolve("p3 ok");
})
// resolvendo uma lista de promessas 
const todasPromessas = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
})

// resolvendo varias promessas com o race 
// a primeira que resolver ele retorna 
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p4 ok");
    }, 2000)
})
const p5 = new Promise((resolve, reject) => {
    resolve("p5 ok");
})
const p6 = new Promise((resolve, reject) => {
    resolve("p6 ok"); 
})
// resolvendo uma lista de promessas 
const corridaPromessas = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
})


// as promises são assicronas
// esse codigo sera execultado primeiro
console.log("isso será execultado primeiro");


// fetch request com a API do GitHub usando a fetch API
const userName = "douglas-jpg";

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        accept: 'aplication/vnd.github.v3+json',
    },
})
    .then((response) => {
        // console.log(typeof response);
        // console.log(response);
        return response.json() // pegar apenas os dados do arquivo
    })
    .then((data) => {
        console.log(`O nome do usuario é ${data.name}`);
        // console.log(data);
    })
    .catch((err) => {
        console.log(`Houver algum erro ${err}`);
    })