/**
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
 * dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */


 const diaDaSemana = function trabalho(dia) {

    diasSemana = ['segunda', 'terca', 'quarta', 'quinta','sexta','sabado', 'domingo'];
    let a ='Dia Útil:';
    let b = 'Fim de Semana:';

    for ( let i=1; i <= diasSemana.length; i++) {
        switch (dia) {
            case 1:
                return `${a}Segunda`;
                break;
            case 2:
                return `${a}Terça`;
                break;
            case 3:
                return `${a}Quarta`;
                break;
            case 4:
                return `${a}Quinta`;
                break;
            case 5:
                return `${a}Sexta`;
                break;
            case 6:
                return `${b}Sábado`;
                break;
            case 7:
                return `${b}Domingo`;
                break;
            default:
                return 'dia inválido';
                break;
        }
    }
 }

 console.log(`${diaDaSemana(7)}`)