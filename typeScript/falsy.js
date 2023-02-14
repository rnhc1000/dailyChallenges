function bouncer(arr) {
    let tmpArr = [];
    let i=0;
      for(let idx in arr) {
    
        if (arr[idx]) {
          tmpArr[i] = arr[idx];
          i++;
        }
      }
      arr  = [...tmpArr];

      console.log(arr)
      return arr;
    }
    
    bouncer([7, "ate", "", false, 9]);