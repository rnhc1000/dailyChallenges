/**
 * 
 * 
 */

function getTotalX(a, b) {


    let res = 0;
    let lcm = a[0];
    let result = 0;
    let multiple = 0;
    let gcd = b[0];

    // Get LCM of all elements of a

    for (let i = 0; i < a.length; i++) {
        lcm = getLCM(lcm, a[i]);
    }

    console.log("LCM ",lcm);

    // Get GCD of all elements of b
    for (let j = 0; j < b.length; j++) {
        gcd = getGCD(gcd, b[j]);
    }
    console.log("B ", gcd);
    // Count multiples of lcm that divide the gcd
    while (multiple <= gcd) {
      multiple += lcm;

      if (gcd % multiple == 0)
        result++;
    }

    return result;
  }



function getGCD(n1, n2) {
    if (n2 == 0) {
        return n1;
    }
    console.log("% ", n1 % n2);
    return getGCD(n2, n1 % n2);
}


function getLCM(n1, n2) {
    if (n1 == 0 || n2 == 0)
        return 0;
    else {
        let gcd = getGCD(n1, n2);
        console.log("GCD ", gcd);
        return Math.abs(n1 * n2) / gcd;
    }
}



let a = [2, 6];
let b = [24,36];

console.log(getTotalX(a, b));
