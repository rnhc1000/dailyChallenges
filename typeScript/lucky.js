/**
 * @param {number[]} arr
 * @return {number}
 * 
 * Given an array of integers arr, a lucky integer 
 * is an integer that has a frequency in the array 
 * equal to its value. 
 * Return the largest lucky integer in the array. 
 * If there is no lucky integer return -1.
 * Input: arr = [2,2,3,4]
 * Output: 2
 * Explanation:
 * The only lucky number in the array is 2 because frequency[2] == 2.
 * 
 * Approach...
 * 1. a[i] == a[j]  frequency++, repeat[]
 * 2. compare 
 */
var findLucky = function (arr) {

    //let count = [...new Array(1)].map((el) => el=0);
    let repeat = [];
    let count = 1;
    //console.log(count);
    let j = 0;
    let freq = 1;
    let luckyOnes = new Map();
    let sizeOfArr = arr.length;

    let axx = [];
    for (let i = 0; i < sizeOfArr; i++) {
        //    for (let k=i+1; k<arr.length; k++) {
        //      if(arr[i] === arr[k]) {
        ///        repeat[j]=i;
        //     freq+=1;
        //   console.log("freq....",freq);
        // count++;
        //console.log(repeat,count);
        //a.set(arr[k],count);
        //j++;
        // }

        if (luckyOnes.has(arr[i])) {
            luckyOnes.set(arr[i], luckyOnes.get(arr[i]) + 1);
            console.log("a tem...");
            console.log(luckyOnes);
        } else {
            luckyOnes.set(arr[i], 1);
            console.log("a n tem...");
            console.log(luckyOnes);
        }
        //}
        //count=1;
    }

    let y = '';
    //console.log(a)
    for (const x of luckyOnes.entries()) {

        //console.log(x);

    }

    //console.log(y);
    //console.log(repeat,count);
    let b = Math.max(...luckyOnes.keys());
    console.log(b);

    let result = [...luckyOnes.entries()]
    //.reduce((a,e) => e[1] > a[1] ? e : a);
    console.log(result);
    console.log("Size...", result.length);

    let sizeOfOptions = result.length;
    let filter = 0;
    let kdx = 0;
    for (let jdx = 0; jdx < sizeOfOptions; jdx++) {
        if (result[jdx][0] === result[jdx][1]) {

            axx[kdx] = result[jdx][0];
            kdx++;
        } else {
            continue;
        }
    }

    console.log(axx);

    if (axx.length > 0) {

        return Math.max(...axx);
    }
    //if (filter) return filter;
        return -1;
//    console.log(filter)
    };

    //let arr = [19, 12, 11, 14, 18, 8, 6, 6, 13, 9, 8, 3, 10, 10, 1, 10, 5, 12, 13, 13, 9]
    //let arr = [ 1,2,2,3,3,3]
    //let arr = [4,3,2,2,4,1,3,4,3]
    let arr=[1,2,2,3,3,3];
    console.log("Result...",findLucky(arr));

    let m = new Map([['1', 2], ['2', 4], ['3', 5]])

    console.log([...m.entries()].reduce((a, e) => e[1] > a[1] ? e : a))
