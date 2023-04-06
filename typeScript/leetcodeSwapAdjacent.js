/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 * In a string composed of 'L', 'R', and 'X' characters, 
 * like "RXXLRXRXL", a move consists of either 
 * replacing one occurrence of "XL" with "LX", 
 * or replacing one occurrence of "RX" with "XR". 
 * Given the starting string start and the 
 * ending string end, return True if and only if 
 * there exists a sequence of moves to 
 * transform one string to the other.
 */

var canTransform = function(start, end) {


    if (start.length === 1) return false;

    let change = [];

    for (let i = 0; i < start.length; i++) {

        for (let j = 1; j < start.length; j++){

            if ((start[i] === 'X') && (start[j] === 'L')) {

                change[i] = "L";
                change[j] = "X";
                i++;
                j++;
            }

            if ((start[i] === 'R') && (start[j] === 'X')) {

                change[i] = "X";
                change[j] = "R";
                i++;
                j++;
            }

        }
    }
    return true;
}

    



let  start = "RXXLRXRXL", end = "XRLXXRRLX";

console.log(canTransform(start, end));

