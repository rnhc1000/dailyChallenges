var findJudge = function(n, trust) {
    let filledArray = [...new Array(n)].map((el) => el=0);
    let countVotes =  [...new Array(n)].map((el) => el=0);

//    console.log(arr);
   //console.log(count);
    console.log(filledArray);
    for(let [x,y] of trust){
        console.log(x,y);
        filledArray[x-1] = 1;
        console.log(filledArray);
        countVotes[y-1]++;
        console.log("C",countVotes);
    }
      for(let i =0; i<filledArray.length;i++){
        if(filledArray[i] == 0 && countVotes[i] == n-1){
            return i+1
        }
    }
    return -1;
};

//let trust =[[1,3],[1,4],[2,3]];
//let trust = [[1,3],[1,4],[2,3],[2,4],[4,3]];
let trust=[[1,2]]
let n=2;

console.log(findJudge(n, trust));