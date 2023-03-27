// synchronous code
console.log("Start");
let x = 0;
for (let i = 0; i < 100000000; i++) {
  x += i;
}
console.log("End");

// asynchronous code using callbacks
console.log("Start");
let xx = 0;
setTimeout(function() {
  for (let i = 0; i < 100000000; i++) {
    xx += i;
  }
  console.log("End");
}, 0);
console.log("Moving on...");


console.log('Message no. 1: Sync');
setTimeout(function() {
   console.log('Message no. 2: setTimeout');
}, 0);
var promise = new Promise(function(resolve, reject) {
   resolve();
});
promise.then(function(resolve) {
   console.log('Message no. 3: 1st Promise');
})
.then(function(resolve) {
   console.log('Message no. 4: 2nd Promise');
});
console.log('Message no. 5: Sync');