function titleCase(str) {
    let a = str.split(" ");
    for (let i=0; i<a.length-1; i++) {
        // console.log(a[i]);
    }

    for (let idx in a){

        let b = a[idx].toLowerCase();
        let c = b.toUpperCase().charAt(0);
        b = b.substring(1);
        console.log(c+b);

        toLowerCase()

        //d = c.concat(b);

        

        //console.log(d);
        //console.log(str[idx]);
    }
  
    return a;
  }
  
  function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
 let a =  titleCase("I'm a little tea pot");;
 console.log(a);