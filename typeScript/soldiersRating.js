/**
 * There are n soldiers standing in a line. 
 * Each soldier is assigned a unique rating value.
 * You have to form a team of 3 soldiers amongst them under the following rules:
 * Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
 * A team is valid if: 
 * (rating[i] < rating[j] < rating[k]) or 
 * (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
 * Return the number of teams you can form given the conditions.
 * (soldiers can be part of multiple teams).
 * Input: rating = [2,5,3,4,1] Output: 3
 * Explanation: 
 * We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
 * let arr = [2,4,5,6,7]
 * 2,4,5 2,6,7 4,5,6 4,6,7 5,6,7
 * 
 * 7,6,7 7,4,2 6,5,4 5,4,2
 
 * 
 */
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {

    let compareUp = [];
    let compareDn = [];

    let sizeRating = rating.length;
    let sizeOfTeam = 3;

    if (sizeRating < 3) return 0;
    let kdx = 1;
    let udx = 0;
    let dnx = 0;
    for (let idx=0; idx < sizeRating; idx++) {

        for (kdx=1; kdx < sizeRating; kdx++) {

            if (rating[kdx] - rating[idx] > 0) {
                compareUp[udx] = rating[idx];
                udx++;

            } else {
                compareDn[dnx] = rating[idx];
                dnx++;
            }
        }

        if (compareDn.length >= 3 && compareUp.length >= 3) break;
    }   

    console.log(compareUp);
    console.log(compareDn);
    
};

let arr = [2,4,5,6,7]

/**
 * 2,4,5 2,6,7 4,5,6 4,6,7 5,6,7
 * 
 * 7,6,7 7,4,2 6,5,4 5,4,2
 */

numTeams(arr);