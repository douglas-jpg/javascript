// setTimeOut
/*exercuta a função F depois de T milisegundo
setTimeout(F, M); */
console.log("Antes do setTimeOut");

// função assicrona
setTimeout(() => {  // recebe como parametros uma função e o intervalo me milisegundos
    console.log("setTimeOut"); 
}, 2000);

console.log("Depois do setTimeOut");

//clearTimeOut
// para a execução do setTimeOut
// tem que adicionar um setTimeOut em uma variavel
//  clearTimeout(T); 


// setInterval
/*execulta uma função F acada T milisegundos
setInterval(T, M); */
// função assicrona
let intervalo = setInterval(() => {
    console.log("setInterval");
}, 1000);


//clearInterval
// para a execução do setInterval
setTimeout(() => {
    clearInterval(intervalo);
}, 4000);
