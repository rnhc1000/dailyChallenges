var pix: number = 3.14159;
var myAwesomeVariable: string ='So Awesome';
var numCatLives: number = 9;

function produto (a: number, b: number, d: number): number {
    return a*b*d;
}

var thing: any = 'hello';
thing = true;
thing = 1;
 
var thingg: number = 7

thingg = 10;


const restoDivisao = (a: number, b: number): number => {
    if (a < b) {
        [a,b] = [b,a];
    }
    return  a % b;
}

    var x = validaNumero(2,3);
    console.log(x);

    var colors=[2, 4, 6];

    colors.map(color => {
        console.log(color*color);
    });


