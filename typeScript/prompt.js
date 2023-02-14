const prompt=require("prompt-sync")({sigint:true}); 


function myFunction() {
  let person = prompt("Please enter your name: ", "Harry Potter");
  if (person != null) {
      console.log("Hello " + person + "! How are you today?");
  }
}


myFunction();