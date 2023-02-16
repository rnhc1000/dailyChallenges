/**
 * 11) As regras para o cálculo dos anos bissextos são as seguintes:
 * De 4 em 4 anos é ano bissexto;
 * De 100 em 100 anos não é ano bissexto;
 * De 400 em 400 anos é ano bissexto;
 * Prevalecem as últimas regras sobre as primeiras.
 * Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, 
 * imprimindo no console a mensagem e retornando true ou false.
 */

 const bissexto = function anoBissexto(ano) {

    if ( !(ano % 400)) {
        return console.log(`Ano Bissexto: ${ano}`);
    } else if ( !(ano % 4) && !(ano % 400)) {
        return console.log(`Ano Bissexto: ${ano}`);
    } else {
        if ( !(ano %4)) {
            return console.log(`Ano Bissexto: ${ano}`);
        }
    }
    return console.log(`Ano com 365 dias: ${ano}`)
 }

 bissexto(1965);
 bissexto(2300);
 bissexto(2016);
