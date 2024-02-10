// pegar elemento pela classe
let elemento1 = document.getElementsByClassName("elemento1"); // return uma lista
// pegar elemento pelo id
let elemento2 = document.getElementById("elemento2");
// pegar elemento pelo querry selector
let elemento3 = document.querySelector("#elemento3");
// document.querySelectorAll retorna uma lista dos elementos 

// codificando o conteudo do elemento
elemento1[0].innerHTML = "elemento pela classe"
elemento2.innerHTML = "elemento pelo id";
elemento3.innerHTML = "elemento pelo query selector"

//eventos do DOM
let btn1 = document.querySelectorAll("button")[0];
let btn2 = document.querySelectorAll("button")[1];
let texto = document.querySelector("#texto");

btn1.addEventListener("click", ()=> {
    texto.innerHTML = "O primeiro botão foi clicado";

    
    // mudar o estulo do css
    btn1.style.backgroundColor = 'red';
    elemento2.style.backgroundColor = 'red';
})
btn2.addEventListener("click", ()=> {
    texto.innerHTML = "Texto normal";

    
    // mudar o estulo do css
    btn1.style.backgroundColor = 'blue';
    elemento2.style.backgroundColor = '#b1b1b1';
})

const elemento = document.querySelector("#elemento");

// Adicionar uma nova classe à lista
elemento.classList.add("novaClasse");

// Remover uma classe da lista:
elemento.classList.remove("classeAntiga");

// Trocar uma classe por outra:
elemento.classList.replace("classeAntiga", "novaClasse");

// Fazer o toggle de uma classe. Isto é, adicionar a classe se não existir e, caso contrário, remover:
elemento.classList.toggle("classeAtivada");
