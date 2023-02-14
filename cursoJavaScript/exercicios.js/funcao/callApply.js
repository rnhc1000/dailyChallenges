function getPreco(imposto = 0.1, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}


globalThis.preco= 20;
globalThis.desc = 0.1;
console.log(getPreco())