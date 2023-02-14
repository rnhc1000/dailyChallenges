const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    // const { failure } = arr;
    // console.log(failure);
    // for (let fail in failure) {
    //   failureItems[fail]=`<li class="text-warning">`+ failure[fail]+`</li>`;
    // }
    // Only change code above this line
    for(let i=0; i<arr.length; i++){
        failureItems[i]=`<li class="text-warning">`+ arr[i]+`</li>`;
    } 
    return failureItems;
  }

  const failureList = makeList(result.failure);

  console.log(failureList);