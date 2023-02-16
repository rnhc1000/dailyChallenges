/**
 * 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
 * como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
 * numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
 * 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

 const calculadora = function calcula(operando1, operacao, operando2) {

    switch (operacao) {
        case '+': 
            let soma = operando1 + operando2;
            return soma;
            break;
        case '-':
            let subtraca0 = operando1 -operando2;
            return subtracao;
            break;
        case '*':
            multiplicacao = operando1 * operando2;
            return multiplicacao;
            break;
        case '/':
            divisão = operando1 /operando2;
            return divisão.toFixed(2);
            break;
        default:
            return 'Operacao Inválida!';
            break;
    }

 }

 console.log(`Resultado: ${calculadora(12,'-', 11)}`);