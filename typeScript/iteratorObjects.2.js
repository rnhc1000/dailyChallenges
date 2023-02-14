// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    // let names =[];
    // names = Object.keys(contacts);
    // if (!names.includes(name)) {
    //     return "No such contact";
    // }
    for (let names in contacts) {
      console.log(contacts[names].firstName);
      if (name === contacts[names].firstName) {
        for (let key of Object.keys(contacts)) {
        // console.log(name,prop);
        //console.log(contacts[key].hasOwnProperty(prop));
          if (contacts[key])//.hasOwnProperty(prop)) 
          {
            let nome = contacts[key].firstName;
            let sobrenome = contacts[key].lastName;
            if (name === nome){
                //console.log(name)
                if (prop === 'likes') {
                    return contacts[key].likes;
                } else if (prop === 'lastName') {
                    return sobrenome;
                } else if (prop === 'number') {
                    return nome
                }
            } 
          } else {
              return "No such property";
          }
        }
      } 
    }return "No such contact";


    // Only change code above this line
}

let a = lookUpProfile("Kristian", "lastName");
console.log("1 " + a);
// a = lookUpProfile("Akira", "likes");

//  console.log("2 " + a);
// a = lookUpProfile("Bob", "teste")
// console.log("3 " + a)

// a= lookUpProfile("Bob", "number");
// console.log("4 " + a);


const names = [
    {
        firstName: 'Ricardo',
        lastName: 'Ferreira'
    },
    {
        firstName: 'Rinaldo',
        lastName: 'Ferreira'
    },
    {
        firstName: 'Rita',
        lastName: 'Ferreira'
    },

];
let key = [];
key = (Object.keys(names));
  // expected output: Array ["a", "b", "c"]

if (key.includes('a')) 
    console.log("Key[0]",key[0]);

console.log(key);


for (let j in names) {
  console.log(names[j].firstName);
}