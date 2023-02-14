function reverseString(str) {
    rts = [...str];
    let r =0;
    str=[];
    for(let i=rts.length-1; i >=0; i--) {
      console.log(i);
      str[r] = rts[i];
      r++;
    }
    //s= "a,b,c,d"
    console.log(str);
    str = str.toString();
    console.log(str);
    let regex = /[,]/g;
    console.log(str);
    str = str.replace(regex, "")
    return str;
  }
  
  let x = reverseString("hello");

  console.log(x)


  let a = [ 1,2,3,4];
  let b = [];

  let c = a.map(() => (b=a));
  console.log(c);

