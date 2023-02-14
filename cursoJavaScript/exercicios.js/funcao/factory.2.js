function criarProduto(nome,preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1900));
console.log(criarProduto('Celular', 2000))