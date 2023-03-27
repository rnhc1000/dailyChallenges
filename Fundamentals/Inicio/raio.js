//PI = 3.141592
// Area = raio**2 * PI

const PI = Math.PI;

let raio = 10;

let area = 0;

// const input = prompt("Informe o raio");
// raio = `${input}`;

console.log(area = PI * raio ** 2);

let a =7;
let b=94;

let c = 0;
console.log(a);
console.log(b);
c = a;
a = b;
b = c;

d = [a,b];
e = [b,a];

[a,b] = [b,a];

console.log(a);
console.log(b);

console.log(d)
console.log(e);

const somar = (a,b) => {
    return (a+b);
}

console.log(somar(9,3));

function subtrair (a,b) {
    return (a - b);
}

let sub = subtrair;

console.log(subtrair(9,2));


function executar(funcao) {
    if (typeof funcao === "function") {
        console.log(funcao());
    } else {
        console.log("Parametro deve ser uma função");
    }
}

function bomDia() {
    return "Bom dia";
}

//Atenção a chamada abaixo:

executar(bomDia()); //Parametro deve ser uma função
executar(bomDia); //Bom Dia - Sem parenteses

const x = bomDia;
console.log(x);

const y = bomDia();
console.log(y);


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve('resolved');
        }, 5000);
        });
}



async function asyncCall() {
    console.log('calling');
    let result=false;
    while (result == false) {
        console.log(".");
        result = await resolveAfter2Seconds();
    };
    console.log(result);
}


asyncCall();


function adicionar(a,b,c,d =0) {

    return a+b+c+d;
}

console.log(adicionar(1,2,3));
//N precisa passar o mesmo numero de parametros na chamada;