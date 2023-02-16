/**
 * 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
 * switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

 const escolha = function escolheNumero() {

        numero = {

            A: 'zero',
            B: 'um',
            C: 'dois',
            D: 'tres',
            E: 'quatro',
            F: 'cinco',
            G: 'seis',
            H: 'sete',
            I: 'oito',
            J: 'nove',
            K: 'dez'
        }

        rnd = Math.floor((Math.random() * 10) + 1);

        switch (rnd) {
            case 0:
                return numero.A;
                break;
            case 1:
                return numero.B;
                break;
            case 2:
                return numero.C;
                break;
            case 3:
                return numero.D;
                break;
            case 4:
                return numero.E;
                break;
            case 5:
                return numero.F;
                break;
            case 6:
                return numero.G;
                break;
            case 7:
                return numero.H;
                break;
            case 8:
                return numero.I;
                break;
            case 9:
                return numero.J;
                break;
            case 10:
                return numero.K;
                break;          
        }

}

for (let i=0; i <= 10; i++ ) {
    console.log(escolha());
}

for (let j=0; j<=10; j++) {
    rrnd = Math.floor((Math.random() * 100) + 1);
    console.log(`${rrnd}`)
}
