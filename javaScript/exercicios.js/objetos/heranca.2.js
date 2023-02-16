// Cadeia de prorórpios ( prototype chain )
//o objeto pai tem como prototipo Object.prototype
Object.prototype.attr0 = '0';
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr1); //resposta: A 
/**
 * filho n tem attr1 mas avo possui
 */


console.log(filho.attr2); //Resposta: B
// console.log(avo, attr3); //ReferenceError: attr3 is not defined


console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
// Respopsta: 0 A B C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing na velMax definida no objeto carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
/**
 * apalavra reservada super referencia o protótipo definido
 * para o objeto desejado e não para o Object.prototype
 */

Object.setPrototypeOf(ferrari,carro)// seta o protipo carro para o objeto ferrari
Object.setPrototypeOf(volvo,carro)
console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())
/**
 * Respostas
 * { modelo: 'F40', velMax: 324 }
 * { modelo: 'V40', status: [Function: status] }
 * V40: 100Km/h de 200
 * 300Km/h de 324
 */