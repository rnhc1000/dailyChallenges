const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice){
    console.log(`${indice++}.${nome}`)
}

for (let i=0; i < fabricantes.length; i++) {
    
    imprimir(fabricantes[i],i);
}


fabricantes.forEach(imprimir);
/**
 * O forEach vai ser chamado tantss vezes
 * quaantas necessário  determinado pelo 
 * length de fabricantes.
 * cada elemento do array reresenta um evento
 * no loop que varre o array
 */
fabricantes.forEach(function(a){
    console.log(a);
})
/** 
 * função normal
 */
fabricantes.forEach(fabricante => console.log(fabricante));
/**
 * função arrow
 */