/**
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 * ! 1. INTEGER_ARRAY a
 * ! 2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here

    let lenA = a.length;
    let lenB = b.length;
    let seed = 1;
    let as, bs = 1;
    let sum = 0;
    let count = 0;
    let value = [];
    /** 
        switch (lenA) {
    
            case 2:
                seed = a[0]*a[1];
            break;
    
            case 3:
                seed = a[1]*a[2];
            break;
        }
    
        console.table(value);
        let calc = [...a, ...b];
        let valid=false;
        console.log(calc);
        for (let k=0; k<a.length; k++) {
            for(let j=0; j<calc.length; j++) {
                if (calc[j]%a[k] === 0) {
                    valid = true;
                } else {
                    valid = false;
                }
            }
        }
    
        console.log(valid);
        */
    let d = a.sort((a, b) => (a - b));
    console.log(a);
    console.log(b);
    console.log("D ", d);
    let c = [...a, ...b];
    c = c.sort((a, b) => (a - b));
    b = b.sort((a, b) => (a - b));
    console.log(c);
    console.log("b ",b);
    a.forEach(as => seed *= as);

    let next = a[lenA - 1];

    console.log("pop", a);


    console.log("Last", next);

    let v = false;
    for (let j = 0; j < c.length; j++) {

        if (c[j] % next === 0) {
            v = true;
        }
    }
    let y = false;


    if (v) {

        next *= 2;
    }

    console.log("V ", v);

    console.log("Seed ", seed);
    b.forEach((bs) => {
        sum = bs % seed
        console.log("R ", sum);
        if (sum === 0) count++;
    });
    console.log("B ", b);
    let yy=0;
    let kk=0;
    let m=0;
    let xx=b[kk];

    console.log(count);
    while (xx !== yy) {
        for (kk = 0; kk < lenB; kk++) {
            for (m = 1; m < lenB; m++) {
                if (b[kk] > b[m]) {
                    xx = b[kk] - b[m];
                    console.log("XX ",xx);
                } else if (b[m] > b[kk]) {
                    yy = b[m] - b[kk];
                    console.log("YY ", yy);
                }
            }
        }
    }

    

    console.log(xx, yy  );
}


let a = [2, 6];
let b = [16, 48];
getTotalX(a, b);