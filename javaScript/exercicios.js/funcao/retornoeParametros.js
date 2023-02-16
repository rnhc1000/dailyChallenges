function area(largura,altura) {
    const area = largura * altura;
    if ( area > 20 ){
        console.log(`Valor acima do permitido: ${area}m2`);
    } else {
        return area;
    }
        
}
let valor = area(5,4);
console.log(`Area permitida igual a: ${valor}m2`);
