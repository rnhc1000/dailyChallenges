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
      
    // Only change code above this line
  }

  Object.entries(contacts).forEach(([key, value]) => {
    console.log(`${key}:${value}`);
  })
  for (let key in  contacts) {
    if (contacts.hasOwnProperty(key)) 
     console.log(contacts[key].lastName);
     contacts[key].firstName === 'Akira' ? console.log(true) : console.log(false);
  }
  
  lookUpProfile("Akira", "likes");

  for (let key of  Object.keys(contacts)) {
    // if (contacts.hasOwnProperty(key)) {
     let nome = (contacts[key].firstName);

     switch (nome) {

        case 'Akira':
            console.log("Meu nome é " + nome);
            break;
        default:
            break
     }
    //  contacts[key].firstName === 'Akira' ? console.log(true) : console.log(false);
//   } else {
    // console.log("N naveguei no objeto")
//   }
}