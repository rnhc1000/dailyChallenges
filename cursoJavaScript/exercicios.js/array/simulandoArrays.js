const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}

console.log(typeof quaseArray) //object
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})
console.log(quaseArray[0])


const meuArray = [ 'Ana', 'Rafael', 'Bia' ]
console.log(meuArray[0]) //Ana
