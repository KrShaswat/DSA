// class Stack - top, bottom, length

class Stack {
    constructor () {
        this.array = [];
    }

    // isEmpty()

    isEmpty() {
        return this.array.length === 0;
    }
    
    // peek()

    peek() {
        return this.array[this.array.length-1];
    }

    // push() - WHY????

    push(value) {
        this.array.push(value);
        return this;
    };

    // pop() - redudency ...

    pop() {
        this.array.pop();
        return this;
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
