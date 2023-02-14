/**
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 */


 const analiseTriangulo = function triangulo(a, b, c) {

    /**
     * recebe 3 variaveis, representandoi os lados deum triangulo
     * valida as variaveis e analisa
     */


     if (( a == b) && (b == c)) {
         return 'Equilátero';
     };

     if (( a == b) && (b != c)) {
         return 'Isósceles';
     }
     
    if ((a != b) && (b != c)) {
        return 'Escaleno';
    }



 }

console.log(analiseTriangulo(3,3,3));
console.log(analiseTriangulo(2,2,3));
console.log(analiseTriangulo(1,2,3));