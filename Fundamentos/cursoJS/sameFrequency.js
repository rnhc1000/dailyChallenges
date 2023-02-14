function sameFrequency(n, m) {
    let n1 = "";
    let m1 = "";
    n1 = n.toString();
    m1 = m.toString();
    console.log(n);
    console.log(typeof n1);
    n1 = [...n1];
    m1 = [...m1];
    m1.sort(function (a, b) { return a - b });
    n1.sort(function (a, b) { return a - b });
    console.log(n1);
    console.log(m1);
    let count = 0;
    if (n1.length != m1.length) {
        return false;
    }

    let len = n1.length;

    for (i = 0; i < len; i++) {

        if (n1[i] == m1[i]) {
            count = count + 1;
        } else {
            return false;
        }
    }
    return count;

}

let n = 22;
let m = 222;
console.log(typeof n);
let response = "";
response = sameFrequency(n, m);

console.log(response);