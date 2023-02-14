function alphabetPosition(text) {
  
  const dictionary = {
    1:  'a', 2:  'b', 3:  'c', 4:  'd',
    5:  'e', 6:  'f', 7:  'g', 8:  'h',
    9:  'i', 10: 'j', 11: 'k', 12: 'l',
    13: 'm', 14: 'n', 15: 'o', 16: 'p',
    17: 'q', 18: 'r', 19: 's', 20: 't',
    21: 'u', 22: 'v', 23: 'x', 24: 'w',
    25: 'y', 26: 'z'
  }  

  // for each entry value in text, scan the object
  // and return its key
  // need to scan the text for each value and 
  // get its key in the object
  // let result=[]
  // for (let key in text) {
  //   for (let keys in Object.keys(dictionary))
  //     result[key] = dictionary[keys];
  // }
  // console.log(result);
  let txt = text.toLowerCase();
  txt=  txt.split("");
  txt = txt.filter(el => String(el).trim());
  console.log(txt);
  let objTxt = {...txt};
  //console.log("Obj",objTxt);
  let length = txt.length;
  let results = [];
  for (let idx in objTxt){

    //console.log(Object.keys(dictionary) == objTxt[idx])
    //console.log(results[k])
    
  }

  let v = ["a", "b"];
  v = {...v};
  const keys = Object.keys(dictionary);
  const values = Object.values(v);
  console.log(values)
  console.log(keys[0])

  let l = v.length;

  for (let m=0; m<l; m++){
    console.log(m)
  }
  if (values[0] === keys[0]){
    console.log(keys[0])

  }
  console.log(keys)
  let i=0;
  let position=[];
  for (i=0; i < length; i++){
    keys.forEach((key) => {
    position[i] =txt[key]
    // console.log(`${key}:${dictionary[key]}`);
    // console.log(position[i])
  })
}
console.log(position);
const users = [
  { id: 0, name: 'John' },
  { id: 1, name: 'Wayne' },
  { id: 2, name: 'David' },
];
const idx = users.map(({ id }) => id);
console.log(idx);

// const ix = dictionary.map(({key}) => key)
// console.log(ix)
let str = "ricardo '^; /? ";
let regex = /[a-zA-Z]/g;
let xstr = "$53{54}+"
  xstr = xstr.match(regex);
  if (xstr === null)
    console.log("É",null)
console.log("X",xstr)
//str=str.toString();
if (!str.length)
  console.log(str)
let test=[]
for (let x=0; x<str.length; x++){
  test[x] = Object.keys(dictionary).find((key) =>dictionary[key]==str[x]);
}

test = test.toString();
test = test.replaceAll(",", " ")
// regex = /[0-9]/g;
// test = test.match(regex)
// test = test.split(",").toString();
console.log( test);

  // console.log(txt);
  // let result=[];

  // let x = txt.forEach((el)=> console.log(el));
  // console.log(x)
  // for (let i in txt){
  //   console.log(txt[i])

  //   if (txt[i] === Object.entries(dictionary)) {
  //     console.log(txt[i])

  //   result[i] = Object.keys(dictionary)
  //   }
  // }
  // console.log(result)
  return text;
}

let text="The quick brown fox dog jumps over the lazy dog"
console.log(text.length)
alphabetPosition(text);


function alphabetPositionx(text) {
  
  const dictionary = {
    1:  'a', 2:  'b', 3:  'c', 4:  'd',
    5:  'e', 6:  'f', 7:  'g', 8:  'h',
    9:  'i', 10: 'j', 11: 'k', 12: 'l',
    13: 'm', 14: 'n', 15: 'o', 16: 'p',
    17: 'q', 18: 'r', 19: 's', 20: 't',
    21: 'u', 22: 'v', 23: 'w', 24: 'x',
    25: 'y', 26: 'z'
  };
  let txt = text.toLowerCase();
  let regex = /[a-zA-Z]/g;
  txt = txt.match(regex);
  if (txt === null) return '';
  txt = txt.filter(el => String(el).trim());
  let length = txt.length;
  if (!length) return '';
  let test=[]
  for (let x=0; x<txt.length; x++){
    test[x] = Object.keys(dictionary).find((key) =>dictionary[key]==txt[x]);
  } 
  test = test.toString();
  test = test.split(',').join(' ')
  return test;
}