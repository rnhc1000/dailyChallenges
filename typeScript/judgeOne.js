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
    let judge = 'one';
    let size = trust.length;
    let k = 1;
    let possibleJudges = [];
    let j = 0;
    let valid = true;
    for (let i = 0; i < size; i++) {
        possibleJudges[j] = trust[i][k];
        j++;
    }

    console.log("Possible Judges ", possibleJudges);

    const numberOfVotes = {};


    possibleJudges.forEach((el) => { numberOfVotes[el] = (numberOfVotes[el] || 0) + 1 });
    //console.log('Possible Judges ', possibleJudges);


    console.log("Number of Votes ", numberOfVotes);

    let probableJudge = Object.keys(numberOfVotes).reduce((key,value) => numberOfVotes[key] > numberOfVotes[value] ? key : value); 

    //console.log(jude);
    console.log('Probable Judge... ', probableJudge);



    // check if the most voted do not trus anyone
    // the chosen one can´t be at zero position in the trust array

    console.log(trust);

    let arrayOfTrustTrue = [];
    let arrayOfTrustFalse = [];
    let countArrayOfTrustFalse = 0;

    let countArrayOfTrustTrue = 0;

    let sizeOfProbableJudge = probableJudge.length;
    let r = 0;

    console.log("Trust Len ",trust.length);
    for (let k = 0; k < trust.length; k++) {
        for (let m = 0; m < sizeOfProbableJudge; m++) {
            //console.log("M ", m);
            if (probableJudge[m] === trust[k][r]) {

                arrayOfTrustFalse[countArrayOfTrustFalse] = false;
                countArrayOfTrustFalse++;

                console.log("K ", trust[k][r]);
                console.log("Nao pode ser juiz...");
                
            } else {
                arrayOfTrustTrue[countArrayOfTrustTrue] = true;
                console.log("K ", trust[k][r]);
                console.log("Pode ser juiz...");
                console.log(probableJudge[m]);
                countArrayOfTrustTrue++;
            }
        }
    }

    console.log(arrayOfTrustTrue);
    console.log(arrayOfTrustFalse);

    let validator = (currentValue) => currentValue = true;

    let candidateJudge = arrayOfTrustTrue.every(validator);

    if (candidateJudge) {

        return 
    }

    console.log(candidateJudge);

}
//let trust =[[1,3], [1,4],[2,3],[2,4],[4,3], [5,3], [6,3]];
//let trust =[[1,3],[1,4],[2,3]];
//let trust = [[1, 3], [1, 4], [2, 3]];
//let trust = [[1,3],[2,3],[3,1]];
let trust = [[1,3],[2,1],[4,3]];
//let trust = [[1,3], [2,3]]
let n = 3;

findJudge(n, trust);;