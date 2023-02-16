const funcs = [];
for (var i=0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
funcs[2]();
funcs[8]();

/**
 * os valores de funcs[2[] e funcs[8] serão os mesmos
 * por conta do escopo
 */