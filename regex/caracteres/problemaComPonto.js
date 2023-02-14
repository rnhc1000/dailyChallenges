const texto = 'Bom\ndia'
console.log(texto.match(/./gi))
//[ 'B', 'o', 'm', 'd', 'i', 'a' ]
// /n não é resolvido no coringa
const texto1 = 'Bom\tdia'
console.log(texto1.match(/./gi))
/**
 * [ 'B', 'o', 'm', 'd', 'i', 'a' ]
[
  'B',  'o', 'm',
  '\t', 'd', 'i',
  'a'
]
 */
// com tab ele mostra

const texto2 = 'Bom\ndia'
console.log(texto2.match(/.../gi))
console.log(texto2.match(/..../gi)) //null

//Cuidado ao usar ponto como coringa
//dotall - algumas linguagens tem um fkag /exp/s, mas JS não!