function ensure(value) {
    // Your code goes here

    if ((typeof value === 'undefined') ) {
        throw new Error('Inicialize a variavel!!!');
    } else if( arguments.length===0 ) {
        throw new Error('Passe um parametro!!!!');
    } else {
        return value;
    }
}



let a;
a=10;
  
  try {
    console.log(ensure(a));
  } catch(err) {
    console.log(err);
  }

  function formatDate(userDate) {



    // format from M/D/YYYY to YYYYMMDD
    
    let regex = new RegExp(/[0-9]/g);

    let format = userDate.replace(/\//g, "");
    console.log(format);
    console.log(typeof(format));

    format = userDate.match(regex);
    console.log(typeof(format));
    let strFormat = format.join('');

    console.log(strFormat);
    console.log(format);

    let formatter = [];

    formatter = userDate.split("/");

    console.log(formatter);
    console.log(formatter.length);
    let lenStr =  (formatter.length)-1;
    let newFormat=[];
    let k = 0;

    for (let i=lenStr; i>=0; i--) {

      newFormat[k] = formatter[i]
      k++;
    }


    console.log(newFormat.join(""));
    
  }
  
  console.log(formatDate("01/31/2014"));

  const obj = { 
    name: "Ricardo",
    age: 57 
  }
console.log(typeof(obj));
  let jsonA = JSON.stringify(obj);

  console.log(typeof(jsonA));


  const json = '{"name":"Ricardo","age": 57}';

  console.log(typeof(json));

  let jsonB= JSON.parse(json);

  console.log(jsonB)



  let aa = [1,2,3];

  aa[100]=0;


  console.log(aa.length);



  class rainForest {

    static a;

  }


  if (true) {

    var first = 'uou'
  }


  function fscope() {
    console.log(first)
    //console.log(Second);
  }


  console.log("FSCOPE ", fscope());
let score;

  let socres = [];
  socres.push(1,2);

  console.log(socres);
  socres.pop();
  console.log(socres);

  socres.push(3,4);
  console.log(socres);

  socres.pop();
  console.log("POP", socres);

  score = socres.reduce((a,b) => a+b);
  console.log(score)


  const animals =[ "R", "M", "C"];

  animals.unshift("D");
  console.log(animals)

  animals.unshift("J");
  console.log(animals)

  const person = {
    name: "Dave",
    age: 40
  }
  const result = Object.keys(person).map(x => x.toUpperCase());


  console.log(typeof(42.1));

  console.log(result)