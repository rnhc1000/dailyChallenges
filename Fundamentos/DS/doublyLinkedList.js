// DS Each Node has data + pointer to next node
// Last Node has a pointer to null


class DoubleListNode {

    constructor(data,next,previous) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }

}

class DoubleLinkedList {
    constructor(head = null, previous=null) {
        this.head= head;
        this.previous = previous;
    }
}

let node1 = new DoubleListNode(2,5,11);
let node2 = new DoubleListNode(5,7,2);
let node3 = new DoubleListNode(7,9,5);
let node4 = new DoubleListNode(9,11,7);
let node5 = new DoubleListNode(11,2,9);
console.log("------------");
console.log(node1);
console.log(node2);
console.log(node3);
console.log(node4);
console.log(node5);
console.log("------------");

node1.next = node2;
node2.next = node3;
node3.next = node4;
node5.next = null;

node1.previous = null;
node2.previous = node1;
node3.previous = node2;
node4.previous = node3;
node5.previous = node4;

console.log({node1});
console.log({node2});
console.log({node3});
console.log({node4});
console.log({node5});

let list = new DoubleLinkedList(node1);

console.log(list);

// console.log(list.head.next.data);

// let countNodes = 0;

// while (list.head.next != null)  {

//     console.log(list.head.next.data);
    
// }

let count=0;
let dados=list.head.next.data;
let node = list.head;
while (node) {
    count++;
    node = node.next;
    dados = dados;
}

if (!node) { 
    console.log("OK " + dados);
}
console.log(node);
console.log(count);
function size(list) {
    let count=0;
    let node = list.head;
    while (node) {
        count++;
        node = node.next;
    }
    return node;
}

let a = size(list);
console.log(a);