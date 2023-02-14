function telephoneCheck(str) {

    let phone =[...str];
    console.log(phone)
    let lenStr = str.length;
    console.log("Size->",lenStr)
    if (lenStr > 16 || lenStr < 10) {
        return false;
    }

    

    let regexCC = /[1]/;
    let regex = /[a-z]|-|;|\?|\*|&|#|!|\s/g; 
    
    str=str.replace(regex, "");
    // console.log(str)
    lenStr = str.length;

    if (lenStr < 10) {

        return false;
    }
    
    //console.log(phone);
    if ((phone[0] !== '1') && (lenStr > 10) ) {
        console.log(phone[0])
       return false; 
    }
    // if (phone[0] === regexCC) {
    //     return true;
    // }
    // let regex = /[a-z]|-|;|\?|\(|\)|\*|&|#|!/g; 
    // str=str.replace(regex, "");
    //let lenStr = str.length;
    //console.log(lenStr)
    // if (lenStr < 9 || lenStr > 11) {
    //     return false;
    // }
    
    console.log(str);
    return true;
  }
  
  console.log(telephoneCheck("1 555 555 5555"));
  console.log(telephoneCheck("8oo-six427676;laskdjf"));
  console.log(telephoneCheck("123**&!!asdf#"));
  console.log(telephoneCheck("(6054756961)"));
  console.log(telephoneCheck("1 456 789 4444"));
  console.log(telephoneCheck("(555)555-5555"));
  console.log(telephoneCheck("(555)5(55?)-5555"))
  console.log(telephoneCheck("1 555-555-5555")) 
  console.log(telephoneCheck("2(757)622-7382"))
  console.log(telephoneCheck("(555-555-5555"))
console.log(telephoneCheck("1 555)555-5555")) //false
console.log(telephoneCheck("(6054756961)") ) //false
console.log(telephoneCheck("555)-555-5555") ) //false
console.log(telephoneCheck("(555-555-5555") ) //false
console.log(telephoneCheck("(555)5(55?)-5555")) //false
console.log(telephoneCheck("55 55-55-555-5") )//false
console.log(telephoneCheck("11 555-555-5555") )//false