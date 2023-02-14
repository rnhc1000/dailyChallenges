

/** 
//open brackets must be closed by same type of brackets
// open brackets must be closed in the correct porder

s ="()" //valid
s="(]" //valid

s="(["//invalid


//baseball game 

x - new score
+ sum of the previous tw0 SocketAddressD double the previous score
C invalidate the previous score


5, 2, c, d, +
output 30

5, -2, 4, c, d, 9
output: 27
*/

//console.log(s);

//let x = [...s];
//x.forEach((el) => console.log(el))


function isValid(s) {
    let str = [...s];
    let valid = []
    let m =0;
    let k=1

    for (let i=0; i<str.length; i+=2) {
        console.log(i,k);
            if ( str[i] === "(" && str[k] === ')' ) {
                valid[m] = true;
                k+=2;
                m++;
            } else if ( str[i] === "{" && str[k] === "}" ) {
                valid[m] = true;
                k+=2;
                m++;
            } else if ( str[i] === "[" && str[k] === "]" ) {
                valid[m] = true;
                k+=2;
                m++;
            } else { 
                valid[m] = false;
                k+=2;
                m++;
            }
    }
    let isValidated = valid.every((elem) => elem===true);
    return isValidated;
}
let s = "[][]";
console.log(isValid(s));