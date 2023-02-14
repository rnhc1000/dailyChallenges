const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let sum=0;
    for (let idx in usersObj) {
      if (usersObj[idx].online === true)
        sum+=1;
    }
    return sum;
    // Only change code above this line
  }
  
  console.log(countOnline(users));