function sumAll(arr) {

    let len = arr.length;
    // let sum = arr.reduce((sum, el) => sum+=el);
    // console.log(sum)
    let aux = [];
    let i=0;
    const x = ((y,z) => y-z);
    arr.sort(x);
    let limiteInferior = arr[0];
    let limiteSuperior = arr[len-1]-1;
    // let count=limiteInferior;
    while(limiteInferior < limiteSuperior) {
        aux[i]=limiteInferior+1;
        i++;
        limiteInferior++;
        console.log(limiteInferior)
    }
    arr = [...arr,...aux]
    return arr.reduce((soma, elemento)=> soma+=elemento)
    console.log(arr)
    console.log("Inf ",limiteInferior);
    console.log("Sup ", limiteSuperior);
} 

    // for (i=0; i<[arr[len-1]]; i++) {
    //     aux[i] = i;
    // }
    // return aux;

    // }

  let x = sumAll([4,1])
    

  console.log(x)
    // [1,4]
    // limite inferior a[0]
    // limite superior a[len-1];

    // gerar uma sequencia entre estes limites

    // contador inicia com a[0]+1 e vai de um em m ate limsupe-1

