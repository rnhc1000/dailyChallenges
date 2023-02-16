// coleção dinâmica de pares chave/valor

const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'generico';
produto.preco = 220;

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
            endereco: {
                logradouro: 'Rua ABC',
                numero: 123
            }
        },
        condutores: [{
            nome: 'Junior',
            idade: 19
        }, {
            nome: 'Ana',
            idade: 42
        }],
        calcularValorSeguro: function() {

        }
}

carro.proprietario.endereco.numero = 7777;
carro['proprietario']['endereco']['logradouro'] = 'Rua XYZ';
console.log(carro)