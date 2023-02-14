/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
let k=0;
let inverseL1 = [];
let inverseL2 = [];
console.log(l1.length)
  for (let i = l1.length-1; i>=0; i--) {
    console.log(i)
    inverseL1[k] = l1[i];
    k++;
  }
  k=0;
  for (let i = l2.length-1; i>=0; i--) {
    console.log(i)
    inverseL2[k] = l2[i];
    k++;
  }
let numberL1 = inverseL1.toString()
let regex = /,/g;

let ac = numberL1.replace(regex,"")
ac=+ac;
let numberL2 = inverseL2.toString()

let bc = numberL2.replace(regex,"")
bc=+bc;

let sum = ac+bc;

sum = sum.toString();
sum = [...sum]
k=0;
let response=[];
for (let i = sum.length-1; i>=0; i--) {
  console.log(i)
  response[k] = sum[i];
  k++;
}

for (let idx in response) {
  response[idx] = parseInt(response[idx]);
}

response= {...response}




console.log(response)
// console.log(bc)

// ac = [...ac];
// bc = [...bc];
// console.log(ac)
// console.log(bc)
};


let l1 = [2,4,3], l2 = [5,6,4];
l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9];
addTwoNumbers(l1,l2)