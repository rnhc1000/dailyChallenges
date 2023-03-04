/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let kdx=0;

    let sizeOfArr = arr.length;

    let luckyOnes = new Map();

    let result = [...new Array(2)].map((element) => element = 0);

    let frequency = [];

    for(let idx = 0; idx < sizeOfArr; idx++) {

        if (luckyOnes.has(arr[idx])) {

            luckyOnes.set(arr[idx], luckyOnes.get(arr[idx]) + 1);

        } else {

            luckyOnes.set(arr[idx], 1);
        }

    }
    result = [...luckyOnes.entries()];
    
    let sizeOfOptions = result.length;

    for (let jdx = 0; jdx < sizeOfOptions; jdx++) {

        if (result[jdx][0] === result[jdx][1]) {

            frequency[kdx] = result[jdx][0];
            
            kdx++;

        } else {

            continue;
        }
    }

    if (frequency.length > 0) {

        return Math.max(...frequency);

    } else {

        return -1;
        
    }

    };

    