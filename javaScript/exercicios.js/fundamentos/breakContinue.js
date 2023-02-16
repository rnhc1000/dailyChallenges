/**
 * break influencia em switch, for e while
 * continue laços foe e while
 */

 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 for (let x in nums) {
     if (x == 5) {
        break; // não influencia o bloco do if e sim no bloco for
     }
     console.log(`${x} = ${nums[x]}`)
 }

 for (let x in nums) {
    if (x == 5) {
       continue; //interrompe a repeticao , mas continua a execuçao do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

externo:
for (let a in nums) {
    for (let b in nums) {
        if ( a == 2 && b == 3)
            break externo;
        console.log(`Par = ${a},${b}`);    
    }
}
/** o break está associado ao laço mais próxumo que
 * no exemplo acima é o bloco for (b in nums). Para assciar ao bloco
 * for (a in nums) cria-se um label, no caso de nome externo e 
 * associa o break ao label do bloco que se quer execura
 * procurar evitar o uso deste recurso. 
 * Motivo: Qualidade do Código
 */