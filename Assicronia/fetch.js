// sintaxe
fetch("URL de busca", { //objeto das configurações dessa requisição
    method: 'GET', // POST PUT DELETE
    headers: {
        'Accept': 'aplication/json',  // para indicar que estar tranzitando dados do tipo json
        'Content-Type': 'aplication/json', // para indicar que estar tranzitando dados do tipo json
        'Authorization': `Bearer ${token}` // para APIs que precisam de token de autorização ( APIs privadas)
    }
});

fetch("URL", {
    method: 'POST',
    headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'aplication/json',
        'Authorization': `Bearer ${token}`
    },
    // posso mandar informações usando o body
    body: json.stringify({ 
        nome: "Douglas",
        idade: 19,
        profissao: "Programador",
        id: 1
    })
});

// resposta da requisição

fetch("URL", {
    method: 'GET'
    // outros metodos
})
    // objeto de resposta da requisição
    .then((response) => response.json())

    // json com as informações recebidas da requisição
    .then((data) => console.log(data))

    // para tratar qualquer tipo de erro
    .catch((err) => console.log(err));




    
// exemplo pratico
// feito uma requisição basica 
const url = `https://reqres.in/api/users`;
fetch(url)
    .then((response) => {

        // tratametno de erro
        if(!response.ok) {
            throw new Error(`Erro ao realizar a rquisição, status: ${response.status}`)
        }
        return response.json()
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// as espesicificações da requisição
fetch(url, {
    method: 'GET',
    headers: {
        'Accept': 'aplication/json',
        // 'Authorization': `Bearer ${token}`  // caso precise de um token
    }
})


// Requisição do tipo POST
fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'aplication/json',
        // precisa que passe isso para entender
        // os tipos de dados que serão enviados
        'Content-Type': 'aplication/json'
    },
    // para mandar os dados no corpo da requisição
    body: JSON.stringify({
        "username": "douglas",
        "email": "douglaslima123@gmail.com",
        "password": "123456"
    })

})
    .then((response) => {
        console.log(response)
        return response.json()
    })