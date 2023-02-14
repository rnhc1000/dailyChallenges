function convertToRoman(num) {

    let arabics = [
        1000, 900, 500, 400,
        100,  90,  50,  40,
        10,   9,   5,   4,
        1
    ];

    let romans = [
        'M', 'CM', 'D', 'CD',
        'C', 'XC', 'L', 'XL', 
        'X', 'IX', 'V', 'IV', 
        'I'
    ]

    let response="";
    let i=0;
    while (num > 0){
        if (num >= arabics[i]) {
            response+=romans[i];
            num-=arabics[i];            
        } else {
            i++;
        }
    }
    return response;
    }

   
   
   console.log(convertToRoman(649));


   function convertRomanObject(num) {

    let roman = {
        I:  1,
        IV: 4,
        V:  5,
        IX: 9,
        X:  10,
        XL: 40,
        L:  50,
        XC: 90,
        C:  100,
        CD: 400,
        D:  500,
        CM: 900,
        M:  1000
    }
    var y=11;
    var x=4;
    var quotient = Math.floor(y/x); //2
    var remainder = y % x; //3
    let soma="";
    let romano =  [];
    let div=0;

        // for (let [key,value] of Object.entries(roman)) {
        //     //console.log(num, key,value)
        //     //value = parseInt(value)
        //     console.log(value)
        //     //div  = Math.floor(num/value);
        //     console.log("Div",div)
        //     //value = value.toString();
        //     soma += key;
        //     // //console.log(soma)
        //     // console.log(num);
        //     num -=value;
        //     console.log("M",num);
    
        //     i++;
        // }

        // console.log(soma)

   }