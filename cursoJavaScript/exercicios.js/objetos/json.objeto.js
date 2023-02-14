/**
 * Java Script Object Notation
 * Notação apenas, com formato textual
 * tendo como principal caracteristica a 
 * interoperabilidade
 */

 const obj = { a:1, b: 2, c:3, soma() { return a + b + c }}

 console.log(JSON.stringify(obj))
// {"a":1,"b":2,"c":3}
// repare que soma n retorna pois JSON trabalha com dados apenas

console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
// { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] } '))
// { a: 1, b: 'string', c: true, d: {}, e: [] }

// json validator na web

