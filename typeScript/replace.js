function myReplace(str, before, after) {
    let idx = 0;
    let pos =0;
    let capital = "";
    //after = [...after];
    // console.log(after);
    // after[0].toUpperCase();
    // console.log(after[0])
    // after.join();
    str = str.split(" ");
    console.log(str);
    for (idx in str){
        if(str[idx] === before) {
            pos = idx;
            capital = str[idx];
        }
    }
    console.log("1st Character", capital.charAt(0));
    after = [...after];
    if (capital[0] === capital[0].toUpperCase()) {
        after[0]=after[0].toUpperCase();
        after=after.join("");
        console.log("Se maiuscula", after);
    } else {
        after[0]=after[0].toLowerCase();
        after=after.join("");
        console.log("Se minuscula", after);
    }
    str[pos] = after;
    // console.log(str);
    console.log(pos, capital)
    str = str.join(" ");
    // console.log(str);
    return str;
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  console.log(myReplace("Let us go to the store", "store", "mall"))
  console.log(myReplace("This has a spellngi error", "spellngi", "spelling"))
  console.log(myReplace("His name is Tom", "Tom", "john"))
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
  console.log(myReplace("I think we should look up there", "up", "Down"))