/**
 * 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. 
 * Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. 
 * Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, 
 * de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. 
 * Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
 * que os resultados sejam iguais. 
 * Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
 * “Delta é negativo”.
 */

 const equacao = function Bhaskara(a, b, c) {
    a = isNaN(a) ? 0 : a;
    b = isNaN(b) ? 0 : b;
    c = isNaN(c) ? 0 : c;
    raiz = [0, 0];
    let delta = ( (b*b) - (4 * a * c) );
    if (delta < 0) {
        return 'Delta Negativo! Refaça';
        } else {
            if (a == 0) {
                console.log('Não existe divisaão por zero');
            } else {
                raiz[0] = (((b + Math.sqrt(delta)))/(2 * a)).toFixed(2);
                raiz[1] = (((b - Math.sqrt(delta)))/(2 * a)).toFixed(2);
                return raiz;
            }
        }
    } 

    console.log(`As raizes da equacao sao: ${equacao(3,-5,12)}`);

 