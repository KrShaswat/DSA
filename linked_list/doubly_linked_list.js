// OOPs

class Node {
    constructor (value) {
        this.value = value,
        this.next = null,
        this.prev = null
    }
}


class Doubly_linked_list {
    constructor(value) {
        // constructor is declaring and making the first node generally
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append (value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend (value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    // insert

    insert (index, value) {
        //check params
        if (typeof(index) !== "number") {
            return console.log("Error: index should be a whole number");
        }

        // boundary conditions
        if (index >= this.length){
            return this.append(value);
        }

        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;
        return this;


        // let currentNode = this.head;

        // let i = 1
        // while (currentNode.next !== index) {
        //     if (i === index) {
        //         newNode.next = currentNode.next;
        //         currentNode.next = newNode;
        //         return this
        //     }else {
        //         currentNode = currentNode.next;
        //         i++;
        //     }
        // }
        // return null
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        };
        return currentNode;
    }
    // printList

    printList () {
        const array = [];
        let currentNode  = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    remove (index) {
        //check params
        if (typeof(index)!== "number") {
            return console.log("Error: index should be a whole number");
        }

        // boundary conditions
        if (index >= this.length){
            return console.log("Error: index bigger than the Linked list length");
        }
        
        // code 

        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        } else if (index === this.length - 1) {
            const leader = this.tail.prev;
            leader.next = null;
            this.tail = leader;
            this.length--;
            return this;
        }
        else{
            const leader = this.traverseToIndex(index-1);
            const deleteNode = leader.next;
            const follower = deleteNode.next;
            leader.next = follower;
            follower.prev = leader;
            deleteNode
            this.length--;
        }
        return this;

    }

}


const myLinkedList = new Doubly_linked_list(10);
console.log(myLinkedList.append(1)); 
console.log(myLinkedList.append(676)); 
console.log(myLinkedList.append(9)); 
console.log(myLinkedList.printList());
myLinkedList.prepend(12);
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, 23)); 

console.log(myLinkedList.printList());

console.log("--------------------------------");

myLinkedList.remove(0)
console.log(myLinkedList.printList());
// console.log(myLinkedList.remove());
// console.log(myLinkedList.printList());
myLinkedList.remove(2)
console.log(myLinkedList.printList());
console.log(myLinkedList.remove(3)); 
console.log(myLinkedList.printList());

