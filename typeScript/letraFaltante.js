function fearNotLetter(str) {

    // let alphabet ="abcdefdghijklmnopqrstuvwxyz";

    // ascii = [A-Z] = [65-90]
    //ascii [a-z] = [97-122];
    let m = [];
    let n = [];


    // alphabet = [...alphabet];
    // for (let i=0; i < alphabet.length; i++) {
    //     m[i]=(alphabet.charCodeAt(i));
    // }

    for (let j = 0; j < str.length; j++) {
        n[j] = str.charCodeAt(j);
    }
    let w = null;
    for (let y = 0; y < n.length; y++) {

        if (n[y + 1] - n[y] > 1) {

            w = n[y + 1]
        }
    }

    console.log(String.fromCharCode(w - 1))
    console.log("Maior", w);
    function diff(a, b) {

        return (b - a)
    }

    // let a;
    //     // alphabet = [...alphabet];
    // if(alphabet.includes(str)) {

    //     alphabet= [...alphabet];
    //     a = alphabet.map(el => el == str);
    // }

    console.log(w);
    console.log(n)
    let x = null;
    if (w === null) {
        return undefined;
    } else {
        x = String.fromCharCode(w - 1);
        return x;
    }
    // console.log(typeof w)
    // console.log(isNaN(x));

    // console.log(isNaN(x));
    // console.log(typeof x)

    // if (x !== null) return x;
    // return undefined;

    // let regex = /[a-zA-Z]/gi;
    // let a = str.match(regex);

    // return a;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));