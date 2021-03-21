// Node class - linked list - value, next

class Node {
    constructor(value){
        this.value = value,
        this.next = null;
    };
};

// class stack - top - bottom - length
class Stack {
    constructor() {
        this.top = null,
        this.bottom = null, // prob
        this.length = 0
    };

    // peek()

    peek() {
        return this.top;
    };

    // push()

    push(value) {
        const newNode = new Node(value);
        
        if (this.isEmpty()) {
            //straight forward 
            this.bottom = newNode;
            this.top = newNode;
            // this.length++;
        } else {
            //our newNode will point to the current top so
            newNode.next = this.top;
            //since old top will now be second to top so lets update our top indicator
            this.top = newNode;
            //length increment;
            // this.length++;
        }
        this.length++;
        return this;
    };

    // pop()

    pop() {
        // check if stack empty
        if (this.isEmpty()) {
            return null;
        }


        // what if the list is 1 then bottom node needs to be null
        if (this.length === 1) {
            // this.top = null;
            this.bottom = null;
            // this.length--;
            // return this
        };

        // otherwise we just shift to next node and forget about the first one
        this.top = this.top.next;
        this.length--;
        return this;
    };

    // isEmpty()

    isEmpty () {
        return this.length === 0;
    }
}


// Test Cases - stack = google,udemy,discord - push pop isempty

myStack = new Stack();
console.log(myStack.isEmpty());
console.log(myStack.push('google'));
console.log(myStack.isEmpty());
console.log(myStack.peek());


// checked isEmpty()

console.log(myStack.push('udemy'));
console.log(myStack.push('discord'));
console.log(myStack.peek());


// checked push()

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.isEmpty());

//checked pop()

console.log(myStack.peek());
