function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    
    let countApples=0;
    let countOranges=0;
    for (const ap of apples) {
        let calc = a + ap;
        console.log("AP ", calc);
        if (calc >= s && calc <=t) { 
            countApples++;
        }
    }
    
    for (const ora of oranges) {  
        let calc = b + ora;
        console.log("ORA ", calc);
        if (calc >= s && calc <=t) {
            countOranges++;
        }
    }
    console.log(countApples);
    console.log(countOranges);
}

let s=7;
let t=11;
let a=5;
let b=15;
let oranges = [5, -6];
let apples = [-2, 2, 1];

countApplesAndOranges(s, t, a, b, apples, oranges);




