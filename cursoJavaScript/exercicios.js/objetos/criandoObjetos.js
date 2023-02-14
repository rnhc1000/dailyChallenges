/**
 * usando a notação literal
 */
const obj1 = {
}
console.log(obj1); // {}

// Objeto em JS
console.log(typeof Object, typeof new Object); // function object
obj2 = new Object;
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desconto) {

    this.nome = nome;
    //this.preco = preco;
    //this.desconto = desconto
    // o this expõe estas variáveis para fora da função
    // sem this, preco e desconto estão encapsulados
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 1999.00, 0.15);

console.log(p1.getPrecoComDesconto().toFixed(2));
console.log(p2.getPrecoComDesconto().toFixed(2));

// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2);
        }
    }
}

const f1 = criarFuncionario('Joao', 7900, 4);
const f2 = criarFuncionario('Maria', 11000, 1)

console.log(f1.getSalario(), f2.getSalario());

// Object create
const filha = Object.create(null);
filha.nome = 'ANA';
console.log(filha)

// Funcao que retona Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info)