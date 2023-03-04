function geraFibonacci(num) {
    let fibonacci = [];
    let indiceInferior=0;
    let indiceSuperior=1;
    let proximoIndice=0
    for (let i=0; i<= num; i++){
        fibonacci[i]=indiceInferior;
        proximoIndice=indiceInferior+indiceSuperior;
        indiceInferior=indiceSuperior;
        indiceSuperior=proximoIndice;
    }
    return fibonacci;
}

function somaFibonacci(array) {
    let soma = array
    .reduce((acc,item) => acc+=item,0);
   // console.log(res);
    return soma;
}

function sumFiboOdd(array,num) {
    let fiboOdd =[]
    let i = 0;
    for (let idx in array) {
        if (array[idx] % 2) {
            fiboOdd[i] = array[idx];
            i++;
        } 
    }
    // console.log(arr)
    console.log(fiboOdd);

    let res = fiboOdd
    .filter((el) => el <= num)
    .reduce((acc,item) => acc+=item,0);
   // console.log(res);

    return res;
  }

  function sumFiboEven(array,num) {
    let fiboEven =[]
    let i = 0;
    for (let idx in array) {
        if (array[idx] % 2) {
            let j=0;
        } else {
            fiboEven[i] = array[idx];
            i++;
        }
    // console.log(arr)
    }
    console.log(fiboEven);

    let res = fiboEven
    .filter((el) => el <= num)
    .reduce((acc,item) => acc+=item,0);
   // console.log(res);

    return res;

}
  console.table(sumFiboOdd(geraFibonacci(20),20));

  console.table(sumFiboEven(geraFibonacci(20),20));

