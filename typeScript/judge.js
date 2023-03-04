/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * In a town, there are n people labeled from 1 to n. 
 * There is a rumor that one of these people is secretly the town judge.
 * If the town judge exists, then:
 * The town judge trusts nobody.
 * Everybody (except for the town judge) trusts the town judge.
 * There is exactly one person that satisfies properties 1 and 2.
 * You are given an array trust where trust[i] = [ai, bi] representing 
 * that the person labeled ai trusts the person labeled bi. 
 * If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
 * Return the label of the town judge if the town judge exists and can be identified, or 
 * return -1 otherwise.

 */
var findJudge = function (n, trust) {

    let numberOfPeople = n;

    let obj = Object.fromEntries(trust);

    //console.log("Obj ", obj);
    let judge = 'one';
    //console.log(trust);
    //console.log(trust[0], trust[0][1]);
    //console.log(trust[1], trust[1][1]);
    let size = trust.length;
    let k = 1;
    let c = [];
    let j = 0;
    let valid = true;
    for (let i = 0; i < size; i++) {
        c[j] = trust[i][k];
        j++;
    }

    console.log(c);

    //console.log(c.forEach((el) => el==el));

    //console.log(a)

    for (let j = 0; j < n; j++) {


    }

    const allEqual = c.every(el => el === c[0]);

    console.log("AllEqual ",allEqual);


    const elements = {};


    c.forEach((el) => { elements[el] = (elements[el] || 0) + 1 });

    console.log("Elements ", elements);

    let arr = Object.values(elements);
    let max = Math.max(...arr);

    console.log(max);

    let jude = Object.keys(elements).reduce((a, b) => elements[a] > elements[b] ? a : b);

    let arr2 = Object.keys(elements).map(function (value, key) {
        return (key, value)
    })
    console.log(jude);
    console.log(arr2);

    console.log(c);
    console.log(trust);

    let arrayOfTrust = [];
    let countArrayOfTrust = 0;

    let sizeOfArr2 = arr2.length;
    let r = 0;

    console.log("Trust Len ",trust.length);
    for (let k = 0; k < trust.length; k++) {
        for (let m = 0; m < sizeOfArr2; m++) {
            //console.log("M ", m);
            if (arr2[m] == trust[k][r]) {

                arrayOfTrust[countArrayOfTrust] = false;
                countArrayOfTrust++;

                console.log("K ", trust[k][r]);
                console.log("Nao pode ser juiz...");
            } else {
                arrayOfTrust[countArrayOfTrust] = true;
                console.log("Pode ser juiz...");
                console.log(trust[k][r]);
                countArrayOfTrust++;
            }
        }
    }

    console.log(arrayOfTrust);
};


//let trust =[[1,3], [1,4],[2,3],[2,4],[4,3], [5,3], [6,3]];
//let trust =[[1,3],[1,4],[2,3]];
let trust = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]

let n = 7;

findJudge(n, trust);;