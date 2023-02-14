Array.prototype.map2 = function(callback) {
    const newArray = []
    for (i=0; i< this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45  }',
    '{ "nome": "Caderno",  "preco": 13.90 }',
    '{ "nome": "Lapis",    "preco": 36.00 }',
    '{ "nome": "Caneta",   "preco": 7.50  }'
]

const tst = function(matriz ) {
    for (let i=0; i < matriz.length; i++) {
        console.log(matriz[i])
    }
}

//tst(carrinho);

for (let j=0; j < carrinho.length; j++) {

    obj= JSON.parse(carrinho[j]);
    console.log(`Preco ${obj.nome}: ${obj.preco.toFixed(2)}`)

}
/**
 * Preco Borracha: 3.45
 * Preco Caderno: 13.90
 * Preco Lapis: 36.00
 * Preco Caneta: 7.50
 */
//const obj1 = (JSON.parse(carrinho[0]));
//console.log(typeof obj1)
//console.log(obj1.preco)

// Solução do Instrutor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
// usando a função map2 definida acima
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)