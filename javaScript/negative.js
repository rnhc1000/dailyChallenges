function plusMinus(arr) {
    // Write your code here
    let pos = [];
    let neg = [];
    let neu = [];
    let i=0;
    let j=0;
    let k=0;
    let ratioPos;
    let ratioNeu;
    let ratioNeg;
    for (let num of arr) { 
        if (num > 0) {            
            pos[i] = num;
            i++;        
        } else if (num === 0 ) {
            neu[j] = num;
            j++;
        } else {
            neg[k] = num;
            k++;
        }
    }


    ratioPos = pos.length / arr.length;
    ratioNeu = neu.length / arr.length;
    ratioNeg = neg.length / arr.length;

    ratioPos= ratioPos.toFixed(6);
    ratioNeu= ratioNeu.toFixed(6);
    ratioNeg= ratioNeg.toFixed(6);

    console.log(ratioPos);
    console.log(ratioNeg);
    console.log(ratioNeu);
}


arr = [1, 1, 0, -1,-1];

plusMinus(arr);

