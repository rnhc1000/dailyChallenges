function breakingRecords(scores) {

    let scoresLength = scores.length;

    let smallest = Math.min(...scores);

    console.log(smallest);
    let max = 0;
    let cmp = 0;
    let record = 0;
    let count = 0;
    let step = 1;
    //let sc = scores.sort((a,b) => a-b);
    console.log(scores);
    if (scores[0] > scores[1]) {
        cmp += 1;
        step += 1;
    }

    max = scores[0];
    let c = scores.length;
    console.log("CMP 0 ", cmp, " STEP 0 ", step);

    while (scoresLength != 1) {

        console.log("While loop ", c--);

        if (scores[cmp] == scores[step]) {
            cmp += 1;
            step += 1;
            console.log("iguais");
        } else if (!(scores[cmp] > scores[step])) {

            if (scores[step] > max) {
                count += 1;
                cmp += 1;
                step += 1;
                max = scores[step];
                console.log("Max ", max, " R ", count, " CMP ", cmp, " Step ", step, " --- > ", scores[cmp], scores[step]);
            } else {

                continue;
            }
        } else {

            step += 1;
            console.log("S ", step, "step", scores[step]);

        }

        console.log(scoresLength);
        scoresLength -= 1;
    }


    console.log(count);
}

let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
//scores=[10,5,20,20,4,5,2,25,1];
breakingRecords(scores);

