/**
 * 12) Faça um algoritmo que calcule o fatorial de um número.
 */
 const fat = function numero(fatorial) {
     let raiz = fatorial;
     let raix = fatorial;
     let i = 0;
     for (i=raiz; i != 1; i--) {
        raix = raix * (raiz - 1)
        raiz--;
        //console.log(`${i}`)
        //console.log(`Raiz: ${raiz}`)
        //console.log(`Raix: ${raix}`)
     }
     //while (raiz > 0){
       
     //}
     return raix;
    
 }

console.log(`O fatorial é: ${fat(6)}`);