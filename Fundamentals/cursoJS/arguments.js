function midpoint() {
    console.log(arguments);
    return (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2;
  }
  
  console.log(midpoint(3, 1, 4, 1, 5)); // 3


  console.log(midpoint(1,2,3,4,5,6,7,8,9));

  function destroyer(arr) {
    let artifacts = [];
    arr = arguments[0];
    console.log(arguments.length);
    for (let j=1; j<arguments.length; j++) {
        artifacts[j]= arguments[j];
    }
    artifacts = artifacts.filter((el) => el);
    console.log(artifacts)
    let newArr=[];
    if (Array.isArray(arguments[0])) {
        for (let i=0; i<arr.length; i++) {
            if(artifacts.includes(arr[i])) {
                ;
            } else {
                newArr.push(arr[i]);
            }
        }
    }
    //console.log(newArr);

    return newArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3, 4));
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

  console.log(destroyer([
    "possum", "trollo", 12, "safari", 
    "hotdog", 92, 65, "grandma", 
    "bugati", "trojan", "yacht"], 
    "yacht", "possum", "trollo", 
    "safari", "hotdog", "grandma", 
    "bugati", "trojan"))