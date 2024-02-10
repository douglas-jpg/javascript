// async e await

// sintax:
// async function () {

//     await funcão
// }


function primeiraFuncao() {
    

    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log("Esperou isso daqui");
            resolve();
        }, 1000)
    })
}

// para deixar a função assicrona coloca o async 
async function segundaFuncao() {

    // console.log("iniciou");

    // sempre tem que usar o await 
    // quando for chamar uma funçao assicrona

    // ela vai respeitar a promisse 
    // dessa função antes de prosseguir com o codigo 
    await primeiraFuncao();

    // console.log("terminou");
}

segundaFuncao();


// exemplo pratico
function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err))
}

async function showUserName(id) {
    // tratar o erro usando o try catch
    try{
        const user = await getUser(id)
        console.log(`O nome do usuario é : ${user.data.first_name}`)

    } catch(erro) {
        console.log(`Erro: ${erro}`)
    }
}


showUserName(4);

