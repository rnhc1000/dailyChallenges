function retornar() {

    function bomDia() {
        return "Bom Dia";
    }

    return bomDia();
}

console.log(retornar);
console.log(retornar());
const w = retornar;
console.log(w());


function somar1(a=0,b=0,c=0) {
    return a+b+c;
}

console.log(somar1(2,3));

function somar2(a) {
    return function(b) {
        return function(c) {
                return a + b + c;
        }
    }
}


console.log(somar2(5)(4)(3));


const somaSimples = somar2(10);
console.log(somaSimples(5)(2));