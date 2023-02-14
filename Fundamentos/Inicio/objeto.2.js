const produto = {
    nome: "Produto",
    preco: 1000,
    desconto: 0.15,
    precoComDesconto: function() {
        return (this.preco = (1 - this.desconto));
    }
}
console.log(produto.precoComDesconto())

const data = {
    dia: 1,
    mes: 10,
    ano: 2002
}

data.dia = 24;
console.log(`${data.dia}/${data.mes}/${data.ano}`);

const usuario = {
    email: 'aluno@cod3r.com.br'
};

usuario.nome = 'Ricardo Ferreira';

console.log(usuario); 
console.logsplitify("Earth-is-our home")
