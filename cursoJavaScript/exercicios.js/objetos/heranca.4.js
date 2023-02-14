function MyObject() {}
console.log(MyObject.prototype) // MyObject {}
// criar osobjetos abaio a partirde uma função
// construtora através do operador new
const obj1 = new MyObject
const obj2 = new MyObject;
console.log(obj1.__proto__ === obj2.__proto__)
/**
 * true pois mesmo com dois obejtos criados a partir da 
 * mesma função construtora apeontam para omesmo prototipo
 */
MyObject.prototype.nome = 'Anônimo';
MyObject.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj2.nome = 'rafael';
obj2.falar()

const obj3 = {}
obj3.__proto__ = MyObject.prototype;
obj3.nome = 'Obj3';
obj3.falar();


// Resumindo
console.log((new MyObject).__proto__ === MyObject.prototype)
console.log(MyObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
/**
 * Resposta: 
 * true
 * true
 * true
 * true
 */