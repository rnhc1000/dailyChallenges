function pairElement(str) {
    str = [...str];
    let arr=[];
    let j=0;
    let pair = [];
    console.log(str)

    for(let k=0; k < 2; k++) {
        for (let m=0; m < str.length-1; m++){
            switch(str[m]) {
                case "A" :
                    arr.push(str[m]+"T");
                    break;
                case "T" :
                    arr.push(str[m]+"A");
                    break;
                case "C" :
                    arr.push(str[m]+"G");
                    break;
                case "G" :
                    arr.push(str[m]+"C");
                    break;
            }
console.log(arr)
        }
        pair.push(arr);

    }

    // for (let i = 0; i<str.length; i++) {
        // switch(str[i]) {
        //     case "A" :
        //         arr.push(str[i]+"T");
        //         break;
        //     case "T" :
        //         arr.push(str[i]+"A");
        //         break;
        //     case "C" :
        //         arr.push(str[i]+"G");
        //         break;
        //     case "G" :
        //         arr.push(str[i]+"C");
        //         break;
        // }
    // }
//     console.log(pair)
// let newArr=[];
// let i=0;
// for (let idx in arr) {

//     newArr[i] = newArr.push(arr[idx]);
//     i++;
// }

//console.log(newArr);
// arr=arr.toString()
// arr = arr.split(",")
console.log(arr);
// console.log(pair)
    // return [...pair];
  }
  
  console.log(pairElement("ATCGA"));

  function alt(str) {
    let obj = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    let arr = str.split("");
    console.log()

    return arr.map(x =>[x,obj[x]]);

  }

  console.log(alt("TCGAT"))