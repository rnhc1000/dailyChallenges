function rot13(str) {
  // str = str.replace(regex, ".");

  console.log(str);
  let caesar = 13;
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let response = [];
  let idx = 0;
  str = str.toUpperCase();
  str = [...str];

  console.log(str);

  for (let i = 0; i < str.length; i++) {
    idx = alphabet.indexOf(str[i]);
    console.log(idx);
    if (idx === -1) {
      response.push(str[i]);
      console.log(response.length);
      // if(response.length >= str.length)
      console.log("-1,-1");
      // console.log("Non caracters", str[i]);
      // console.log(response);
      i += 1;
      idx = alphabet.indexOf(str[i]);
      console.log(i, idx);
      response[i] = alphabet[idx];

      //console.log(response.length);
    }
    idx += caesar;
    if (idx >= alphabet.length) {
      idx -= alphabet.length;
    }
    console.log(i, str.length);
    if (i < str.length) {
      response[i] = alphabet[idx];
    } else {
      return (response = response.join(""));
    }
    //console.log(response.length);

    //console.log(alphabet[idx])
    //console.log(idx)

    // str[i] = str[caesar]
  }
  // response = response.filter((el) => el !== " ");
  //response.pop();
  // return response=response.join("")
}

//   console.log(rot13("SERR PBQR PNZC"));
// //   console.log(rot13("SERR CVMMN!"));
// //   console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
//   console.log(rot13("SERR YBIR?"));

function rot14(str) {
  let caesar = 13;
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let response = [];
  let idx = 0;
  str = str.toUpperCase();
  str = [...str];
  let strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    idx = alphabet.indexOf(str[i]);
    console.log(idx);
    if (idx === -1) {
      response.push(str[i]);
      i += 1;
      idx = alphabet.indexOf(str[i]);
      //response[i] = alphabet[idx];
      console.log(response);
      //response = response.filter((el) => el != null);
    }
    idx += caesar;
    if (idx >= alphabet.length) {
      idx -= alphabet.length;
    }
    response[i] = alphabet[idx];
    //response = response.filter((el) => el != null);
  }
  let retorno = response.filter((el) => el !== null);
  if(retorno.length > str.length) {
    retorno.pop();
  }
  console.log(response);

  console.log(retorno);

  console.log(retorno.length, str.length);

  //let arr = ["F", "R", "E", "E", " ", "P", "I", "Z", "Z", "A", "!", undefined];

  //console.log("Filtered", filtered);
  return (retorno = retorno.join(""));
}

console.log(rot14("SERR PBQR PNZC"));
console.log(rot14("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("SERR YBIR?"));
