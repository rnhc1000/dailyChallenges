const texto = `
    Os emails dos convidados são:

    - fulano@cod3r.com.br
    - fulano@gmail.com
    - fulano@registro.br
    - rafa.sampaio@yahoo.com
    - rafa.sampaio@yahoo.com.br
    - rafa_sampaio@yahoo.com.br

`

console.log(texto.match(/\w{1,}\.?\w{1,}@\w{1,}\.\w{2,3}\.?\w{0,2}?/g))

console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g))

console.log(texto.match(/\w+@\w+\.\w+\.?\w{2}?/g))

console.log(texto.match(/[\w.]+@[\w.]+[\w.]+/g)) // crirar grupo para incluir o . [\w.]
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}.?\w{0,2}/g))

// grupos

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g)) // tornando o grupo opcional (\.\w{2})?