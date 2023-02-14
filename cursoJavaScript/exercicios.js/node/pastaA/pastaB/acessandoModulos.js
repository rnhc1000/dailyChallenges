const moduloA = require('../../moduleA')
console.log(moduloA.ola)


const http = require('http') // modulo core do node/
http.createServer((req, res) => {
    res.write('Bom dia');
    res.end();
}).listen(8080); 
/**
 * servidor criado na porta 8080
 * e para cada requisição, repsonde com o valor Bom dia
 * testar no browser
 */
