/**
 * Escopo criado quando uma função é declarada
 * este escopo permite à função acessar e manipular
 * variáveis externas à função 
 * Abaico, Contexto Léxixo em ação
*/

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora()
console.log(minhaFuncao())