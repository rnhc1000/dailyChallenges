const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'

console.log(texto.match(/\..../g))
//[ '.mp3', '.mp3', '.mp3', '.mp3' ]

console.log(texto.match(/\w+\.mp3/g))
//[ 'jazz.mp3', 'rock.mp3', 'podcast.mp3', 'blues.mp3' ]
// \w 1 caractere
// + quantificador 1 ou mais
