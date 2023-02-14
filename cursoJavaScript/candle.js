function birthdayCakeCandles(candles) {
    // Write your code here
    let maxNum = 0;
    let count = 0;
    let tmpMax = 0;
    let maxTmp = [];
    let i = 0;
    let cadles = 0;
    let candlesOrdered = []
    let max = 0;
    //candles = candles.sort((j,k) => j-k);
    //candlesOrdered = candles.filter(function(elem, pos, self){
    //    return self.indexOf(elem) == pos;
    //});
    // console.log("ordered ", candlesOrdered);
    //candles = [...new Set(candles)];
    // cadles = Math.max(candles);
    //let max = 0;


    console.log("max ", max);
    console.log(candles);
    for (let num of candles) {
        if (num >= maxNum) {
            maxNum = num;
            maxTmp[count] = maxNum;
            count++;
            //console.log("count + ", count);
        }
        // count--;
        //console.log("count - ", count);
        //count < 0 ? count = 0 : count;

    }
    max = Math.max(...maxTmp);
    count = 0;
    for (let k of maxTmp) {

        if (k === max) {
            count++;
        }
    }

    return count;

}

let candles = [4, 4, 17, 5, 1, 2, 3, 5, 17];

console.log(birthdayCakeCandles(candles));