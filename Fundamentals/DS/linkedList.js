// DS Each Node has data + pointer to next node
// Last Node has a pointer to null


class ListNode {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class LinkedList {
    constructor(head = null) {
        this.head= head;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(7);
let node4 = new ListNode(9);
console.log("------------");
console.log(node1);
console.log(node2);
console.log(node3);
console.log(node4);
console.log("------------");

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log({node1});
console.log({node2});
console.log({node3});
console.log({node4});

let list = new LinkedList(node1);

console.log({list});

// console.log(list.head.next.data);

// let countNodes = 0;

// while (list.head.next != null)  {

//     console.log(list.head.next.data);
    
// }

let count=0;
let node = list.head;
while (node) {
    count++;
    node = node.next;
}
console.log(count);
function size(list) {
    let count=0;
    let node = list.head;
    while (node) {
        count++;
        node = node.next;
    }
    return count;
}

let a = size(list);
console.log(a);