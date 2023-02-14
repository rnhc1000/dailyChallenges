function translatePigLatin(str) {
    // str = [...str];
    // let first=str[0];
    // let regex = /,/g;
    // console.log(first)
    // let regexVowel=/[aeiou]/;
    // if (first.match(regexVowel)) {
    //     console.log("É vogal...");
    //     // str=str.push("way");
    //     console.log(str);
    //     str.push("way");
        
        
    // } else {
    //     str=str.slice(1);
    //     console.log(str);

    //   str.push(first+"ay");
    //   str=str.join();
    // }

    // let xtr = str.replace(regex, "");
    // return xtr;
    if (str.match(/^[aeiou]/)) return str + "way";
    const consonant = str.match(/^[^aeiou]+/)[0];
    console.log(consonant);
    return str.substring(consonant.length) + consonant +"ay";
  }
  
  console.log(translatePigLatin("california"));