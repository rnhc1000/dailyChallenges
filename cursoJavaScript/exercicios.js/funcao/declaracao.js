// function declaration
function soma(x,y) {
    return x + y;
}

//function expression
const sub = function (x,y){
    return x-y;
}

//named function
const mult = function mult(x,y){
    return x * y;
}

/**
 * aprincipal diferençã entre elas é que JS
 * carrega a function declaration primeiro
 * e assim possousá-la em qualquer lugar do código
 * named e funtion expression só permite o uso
 * após a definição das mesmas
 */