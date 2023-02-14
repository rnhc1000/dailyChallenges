const fs = require('fs') // modulo do node q trata file system

const read = nomeArquivo => {
    return fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, { encoding: 'utf-8' })
}


const write = (nomeArquivo, conteudo) => {
    const dirname = `${__dirname}/alterados`
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, { encoding: 'utf8'})
}

module.exports = { read, write }