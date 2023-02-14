const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/[a-z]/g))
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

console.log(texto.match(/\s./g))
console.log(texto.match(/[\?.]/g))
console.log(texto.match(/[b-d]/g))



