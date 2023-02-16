const pai = {
    nome: 'Pedro',
    corCabelo: 'preto',
    raca: 'branca',
    olhos: 'azuis'
}

const filha1 = Object.create(pai);

/**
 * cria o objeto filha a partir
 * do protipo pai
 */

 filha1.nome = 'Ana';
 console.log(filha1.corCabelo, filha1.raca, filha1.olhos)
 /**
  * Resposta: preto branca azuis
  * pois filha1 herda de pai os atributos 
  * definidos no objeto pai
  */

  const filha2 = Object.create(pai, {
      nome: { value: 'Bia', writable: false, enumerable: true}
  })

  console.log(filha2.nome)// Bia
  console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
  //Bia tem cabelo preto
// observe que Bia herda cor do cabelo do objeto pai

console.log(Object.keys(filha1)) // [ 'nome' ]
console.log(Object.keys(filha2)) // [ 'nome' ]

console.log(Object.values(filha2)) // [ 'Bia' ]
console.log(Object.entries(filha2)) // [ [ 'nome', 'Bia' ] ]

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(`Proprio: ${key}`) : console.log(`Por heranca: ${key}`)
}


