function formatDate(userDate) {
  
    let novaData = userDate.replace(/\//g, "");
    novaData = [...novaData];
    //data = userDate.reverse();
    // format from M/D/YYYY to YYYYMMDD
    
    //return data;
    // novaData=novaData.split("").reverse().join("")
    console.log(novaData)
    novaData=novaData[4]+novaData[5]+novaData[6]+novaData[7]+novaData[0]+novaData[1]+novaData[2]+novaData[3]
    console.log(novaData)

  }
  
  console.log(formatDate("12/31/2014"));