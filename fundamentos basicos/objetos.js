// objeto
let pessoa = {
    nome: "Douglas",
    idade: 19,
    peso: 69.5,
    altura: 1.69,
    amigos: ["evelyn", "joão filho", "davi", "yuri", "leticia"],
    vivo: true,
    saudacao: function() {
        console.log("Ola meu nome é " + this.nome );
    },
    enderoco: {
        cidade: "limoeiro do norte",
        bairro: "brotolandia",
        numero: 836
    }
};

//acessar propriedades
pessoa.nome;
pessoa["peso"];

// adicionar ou modificar
pessoa.idade = 20;
pessoa.profissao = "Desenvolvedor";

//remover
delete pessoa.amigos;


