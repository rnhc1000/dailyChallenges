function truncateString(str, num) {
    let size = str.length;
    console.log(size);
    console.log(num);
    if (size > num) {
        str = str.substring(0,num);
        return str + "...";
    } else if (num >= size) {
        return str;
    }
  }
let y = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
//  let x =  truncateString("A-tisket a-tasket A green and yellow basket", 8);
//  console.log(x);

 console.log(y)