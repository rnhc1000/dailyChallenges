/**
 * 
 * @param {int} x1 
 * @param {int} v1 
 * @param {int} x2 
 * @param {int} v2 
 */


function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    let k1=x1;
    let k2=x2;
    let j1=v1;
    let j2=v2;
    let count = 0;
    let ratio = k2-k1;
    ratio > 0 ? ratio : ratio*=-1;

    while (k1 != k2) {
        
        k1+=j1;
        k2+=j2;

        console.log(k1 + " " + k2);
   
        let cmp = k2-k1;
        cmp > 0 ? cmp : cmp*=-1;

        if (cmp < ratio) {
            continue;
        } else {
            return "NO";
        }

    }

    return "YES";

}


console.log(kangaroo(0,3,4,2));
console.log(kangaroo(0,2,5,3));