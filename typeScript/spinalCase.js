function spinalCase(str) {
    // str = [...str];

    let xtr = str.toLowerCase();
    // str = [...str];
    let regex = /\s/g;

    xtr = str.replace(regex, "-");

    // xtr.filter((el) => el != "")
    console.log(xtr)

    str= str.split(/\s|_|(?=[A-Z])/).join("-")
    console.log(str);
    return xtr;
  }
  
  console.log(spinalCase('This Is Spinal Tap'));

  console.log(spinalCase("AllThe-small Things") );