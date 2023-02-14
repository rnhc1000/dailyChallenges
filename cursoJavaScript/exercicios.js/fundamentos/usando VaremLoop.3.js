const funcs = [];
for (let i=0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
funcs[2]();
funcs[8]();

/**
 * os valores de funcs[2[] e funcs[8] serão 2 e 8 respectivamente
 * por conta do escopo de bloco do uso da palavara let na declaração
 * da variável i
 */