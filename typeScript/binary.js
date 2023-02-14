function binaryAgent(str) {
    let atx=[];
    atx = str.split(" ");
    console.log(atx);
    let aux="";
    let dictionary = {
        a:	"01100001",	
        b:	"01100010",	
        c:	"01100011",	
        d:	"01100100",	
        e:	"01101001",	
        f:	"01100110",	
        g:	"01100111",	
        h:	"01101000",	
        i:	"01101001",	
        j:	"01101010",	
        k:	"01101011",	
        l:	"01101100",	
        m:	"01101101",	
        n:	"01101110",	
        o:	"01101111",	
        p:	"01110000",	
        q:	"01110001",	
        r:	"01110010",	
        s:	"01110011",	
        t:	"01110100",
        u:	"01110101",	
        v:	"01110110",	
        x:	"01111000",	
        y:	"01111001",	
        z:	"01111010",	
}


    for (let [key,value] of Object.entries(dictionary)){
        // console.log(key + ' ' + value)
        // console.log("Dic", value);

        for (let idx in atx){
            // console.log(atx[idx])
            // console.log("Dic", dictionary[value]);
            if(atx[idx] === value) {
                // console.log("iguais")
                // console.log(atx)
                aux +=key + " ";
                // console.log(aux)
            }

        }

    }
    console.log(aux)
    return aux;
  }
  
let str="01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
console.log(binaryAgent(str));

function binaryAgenxt(str) {
    var biString = str.split(" ");
    var uniString = [];
  
    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/
  
    for (var i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
  
    // we then simply join the string
    return uniString.join("");
  }
  
  // test here
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );

  function binaryAgenty(str) {
    return String.fromCharCode(
      ...str.split(" ").map(function(char) {
        return parseInt(char, 2);
      })
    );
  }