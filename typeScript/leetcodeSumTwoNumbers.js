

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class LinkedList {
  constructor(head = null) {
      this.head = head
  }
}
class ListNode {
  constructor(val) {
    this.val =val;
    this.next = null;
  }
}


let l1 = [2,4,3], l2 = [5,6,4];

let node =[]
let next ="";
for (let idx in l1) {
  node[idx]=new ListNode(l1[idx])
}

// for (let i=0; i<node.length; i++){
//   node[idx] = 
// }
console.log(node,next)
let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3);

node1.next=node2;
node2.next=node3;
node3.next=null;

console.log(typeof node1)

let list = new LinkedList(node1)
console.log(list.head.next.val)

console.table(list)

