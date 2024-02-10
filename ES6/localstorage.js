// salvar dados no local storage
// os parametros é a chava depois o valor
localStorage.setItem("name", "douglas");


// restar sem perder dados
// ela ficara salvo no pc pode desligar e ligar o pc e ainda vai ta 

// resgatar dados
const name = localStorage.getItem("name");
console.log(name);

// resgatar dados que nao existe
const lastName = localStorage.getItem("lastName");
console.log(lastName);

if(!lastName) {
    console.log("Sem sobrenoma");
}

// remover item
localStorage.removeItem("name");

// limpar todos os dados
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

console.log(typeof localStorage.getItem("b")); // sempre vai trazer como texto

localStorage.clear();

 // session storage
 sessionStorage.setItem("numero", 123);


 // iniciar e perder dados
//  se fechar a aba ela perderar todos os dados

// resgatar dados
const n = sessionStorage.getItem("numero");
console.log(n);

// remover 1 item ou todos
sessionStorage.removeItem("number");
sessionStorage.clear();


// salvar um objeto
const pessoa = {
    nome: "douglas",
    idade: 19,
    profissao: "programador"
};

// mandar o objeto na forma de json 
localStorage.setItem("pessoa", JSON.stringify(pessoa));

// pegar o json
const getPerson = localStorage.getItem("pessoa");
// tranformar o json em objeto
const personObject = JSON.parse(getPerson);

console.log(personObject.nome);

