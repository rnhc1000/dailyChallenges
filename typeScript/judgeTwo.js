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
        possibleJudges[j] = trust[i][k]+'';
        j++;
    }

    //let possibleJudge = possibleJudges.sort((a,b) => (b-a));
    possibleJudges = [...new Set(possibleJudges)];

    //console.log(possibleJudges);
    const numberOfVotes = {};
    //possibleJudges.forEach((candidateJudges) => { numberOfVotes[candidateJudges] = (numberOfVotes[candidateJudges] || 0) + 1 });
    console.log("Possible Judges...",possibleJudges);
    //console.log("Number of Votes...", numberOfVotes);
   // let vettingJudges = Object.keys(numberOfVotes).reduce((key,value) => numberOfVotes[key] > numberOfVotes[value] ? key : value);
    //let probableJudge = Object.keys(numberOfVotes).map((value, key) => (key,value));
   
    //console.log("Probable Judge...",probableJudge);
    console.log(trust);
    //console.log(vettingJudges);
    let arrayOfTrust = [];
    let countArrayOfTrust = 0;
    let objectOfTrust = {

     
    };

    let object = {

    }

    console.log(possibleJudges);
    let arrayOfJudges = [];
    console.log(arrayOfJudges);
    object[possibleJudges[1]] = 'true';
    let key = 0;
    console.log(object);
    let sizeOfProbableJudge = possibleJudges.length;
    for (let m=0; m < possibleJudges.length; m++) {

    for (let k = 0; k < trust.length; k++) {

        console.log("k...", k)
        console.log("Comparando...",possibleJudges[m]);
        console.log("com...", trust[k][0]);
        key = possibleJudges[m];
        objectOfTrust.key = [];
            if (possibleJudges[m] == trust[k][0]) {

                //Object.assign(objectOfTrust[possibleJudges[m]],[false]);

                arrayOfJudges[m]= 1;
                objectOfTrust[key] = 'true' ;
                arrayOfTrust[countArrayOfTrust] = true;
                countArrayOfTrust++;
                console.log("M...",m);
                console.log("KT....", trust[k][0])
            } else {
                //Object.assign(objectOfTrust[possibleJudges[m]] ,[true]);
                arrayOfJudges[m] = 0;
                //value[k]=true;
                objectOfTrust[key] = 'false' ;
                arrayOfTrust[countArrayOfTrust] = false;
                countArrayOfTrust++;
                console.log("M...",m);
                console.log("KF....", trust[k][0])

            }
        }
    } 
        console.log(arrayOfJudges);
    console.log(objectOfTrust);
    console.log(arrayOfTrust);

    let validator = (currentValue) => currentValue === true;
    let candidateJudge = arrayOfTrust.every(validator);

    console.log(candidateJudge);
    if (candidateJudge) {
       // return probableJudge;
    } else {
        return -1;
    }
}
//let trust =[[1,3], [1,4],[2,3],[2,4],[4,3], [5,3], [6,3]];
//let trust =[[1,3],[1,4],[2,3]];
//let trust = [[1,3],[1,4],[2,3],[2,4],[4,3]];
//let trust = [[1,3],[2,3],[3,1]];
//let trust = [[1,2],[2,3]];
let trust = [[1,3],[2,1],[4,3], [3,2]];
//let trust = [[1,3], [2,3]]
let n = 3;
const initialArr = [
    {name: 'eve'},
    {name: 'john'},
    {name: 'jane'}
  ]

const newArr1 = initialArr.map(v => ({...v, isActive: true}))
const newArr2 = initialArr.map(v => Object.assign(v, {isActive: true}))


const jdg = 
console.log(newArr1);
console.log(newArr2);
console.log(findJudge(n, trust));

// JavaScript program to add array into
// an object using push() function

// Creating a JS object to add array into
var Obj = {			

};

// Array to be inserted
var arraynew = ['Hello', 'World', '!!!'];
Obj.arrayTwo = [];
// Pushing of array into arrayTwo
Obj['arrayTwo'].push(arraynew);	

console.log(Obj.arrayTwo);
	
