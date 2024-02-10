/* try catch e finally são um bloco de declaração
para tentar (try) fazer algo caso der erro (catch)
e finalmente (finally) */

try {
    // condição de erro
    throw "meu erro";
} catch (e) {
    // condição de tratamento
    // posso usar mais de uma clausa catch
    console.log("Houve um erro")
}finally {
    // bloco sempre executaddo independendo do erro ou não
}

// throw é usado para informar um erro
throw "meu erro";
