// class node

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// class queue - first,last,length

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    // methods - isEmpty, enqueue, dequeue, peek

    peek () {
        return this.first;
    }

    isEmpty () {
        return this.length === 0;
    }

    enqueue (value) {
        const newNode = new Node (value);

        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue () {
        if (this.isEmpty()) {
            return null;
        }

        if( this.length === 1) {
            this.last = null;
        }
        // if we want to use the dequeue values
        
        // const holdingPositio = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }

}

// peeks check
const myQueue = new Queue();
console.log(myQueue.peek());

// enqueue check

console.log(myQueue.enqueue('Joy'));
console.log(myQueue.enqueue('Matt'));
console.log(myQueue.enqueue('Pavel'));
console.log(myQueue.enqueue('Samir'));

// dequeue check

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());


