const inputArr = ["A", "B"]

const arr$ = in(inputArr);
arr$.subscribe((values)=> console.log(`Values:`, values))