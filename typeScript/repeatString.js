function repeatStringNumTimes(str, num) {

    if (num < 0) return "";
    let s = []
    for (let i=0; i<num; i++) {
      s[i] = str;
    }
    str = s.toString();
    console.log(str);
    let regex = /[,]/g;
    str = str.replace(/[,]/g, "");
    return str;
  }
  
  let x = repeatStringNumTimes("abc", 4);
  console.log(x);