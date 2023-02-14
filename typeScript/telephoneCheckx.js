function telephoneCheck(str) {
    let phone =[...str];
    let lenStr = str.length;
    // console.log("Size->",lenStr)
    if (lenStr > 16 || lenStr < 10) {
        return false;
    }
    if (phone[0] ==="(" && phone[lenStr-1] ==")") {
      return false;
    }
    if(phone[0] === ('5') && phone[3] === ")"){
        console.log(phone);
      return false;
    }

    if(phone[2] === "(" && phone[6] === ")"){
        console.log(phone)
        return true;
      }
      console.log(phone)

    let regex = /[a-z]|-|;|\?|\(|\)|\*|&|#|!|\s/g; 
    str=str.replace(regex, "");
    lenStr = str.length;
    if (lenStr < 10) {
        return false;
    }
    
    if ((phone[0] !== '1') && (lenStr > 10) ) {
       return false; 
    }
    // if (lenStr < 9 || lenStr > 11) {
    //     return false;
    // }
    
    // console.log(str);
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
console.log(telephoneCheck("1 (555) 555-5555"))
console.log(telephoneCheck("2 (757) 622-7382"))

let a = "2 (757) 622-7382";

console.log(a.length);

if (a[0] !== '1' && a.length > 10){
    console.log(true)
}