const texto = '<div>Conteudo 01<\/div><div>Conteduo 02<\/div>'

//quantificadores são gulosos ( greedy)

console.log(texto.match(/<div>.+<\/div>/g)) // . qualquer caractere e + um ou mais

//[ '<div>Conteudo 01</div><div>Conteduo 02</div>' ]


console.log(texto.match(/<div>.*<\/div>/g))
// [ '<div>Conteudo 01</div><div>Conteduo 02</div>' ]

console.log(texto.match(/<div>.{0,100}<\/div>/g))

//[ '<div>Conteudo 01</div><div>Conteduo 02</div>' ]

//quantificaores não gulosos
console.log(texto.match(/<div>.+?<\/div>/g))
//[ '<div>Conteudo 01</div>', '<div>Conteduo 02</div>' ]

