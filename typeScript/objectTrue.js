function truthCheck(collection, pre) {
    let aux=[];
    let i=0;
    console.log("Len ->", collection.length);
    for (let j=0; j<collection.length; j++) {
        console.log("J -> ", j)
        for (let[key,value] of Object.entries(collection[i])) {
            console.log(key,value)
            if ((key === pre)){
                aux[i] = value;
                console.log(i)
                i++;
              // return true;
            }
      
        }
    }
    console.log(aux)
   // return false;
    
    }
    
    console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: true}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
    // console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))
    // console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"))
    // console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"))
    // console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught"))
    function truthChecks(collection, pre) {
        // Create a counter to check how many are true.
        let counter = 0;
        // Check for each object
        for (let c in collection) {
          // If it is has property and value is truthy
          if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
          }
        }
        // Outside the loop, check to see if we got true for all of them and return true or false
        return counter == collection.length;
      }
      
      truthCheckxx([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
      function truthCheckxx(collection, pre) {
        return collection.every(function (element) {
          return element.hasOwnProperty(pre) && Boolean(element[pre]);
        });
      }
      
      truthCheckxxx([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
      function truthCheckxxx(collection, pre) {
        // Is everyone being true?
        return collection.every(obj => obj[pre]);
      }
      
      truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");