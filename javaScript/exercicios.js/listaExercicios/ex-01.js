/**
 * Lista inciada em 21/09
 * Ex 01
 * Crie uma função que dado dois valores (passados como 
 * parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores
 */
const operacoes = function aritmetica(a, b, conta) {
    /**
     * testa se numero, caso contrario, atribui um valor padrão = 1;
     */
    a = isNaN(a) ? 1 : a;
    b = isNaN(b) ? 1 : b;

    switch (conta) {

        case 'soma':
            sum = a + b;
            console.log(`Soma: ${sum}`);
            break;

        case 'subtracao':
            sub = a - b;
            console.log(`Subtracao: ${sub}`);
            break;

        case 'multiplicacao':
            mul = a * b;
            console.log(`Multiplicacao: ${mul}`);
            break;

        case 'divisao':
            if (b == 0) {
                console.log('Nao existe divisao por zero');
                break;
             } else {
                 div = a/b;
                 console.log(`Divisao: ${div}`);
                 break;
             }

        default: 
            console.log('Defina a operação desejada!');
            break;

    }

}

operacoes(10,10,'divisao');
operacoes(10,20,'soma');
operacoes(10,30,'subtracao');
operacoes(40,50,'multiplicacao');




