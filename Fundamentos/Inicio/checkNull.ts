var a: any;
var b: number = 0;

function check(x:any, name: any) {
    if (x == null) {
        console.log(name + ' == null');
        
    if (x === null) {
        console.log(name + ' === null');
    }
    if (typeof x === undefined) {
        console.log(name + ' is undefined');
    }
}
}

check(a,'a');
check(b,'b');