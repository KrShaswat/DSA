// class node - left,right,value

class Node {
    constructor (value) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

// class binary - root

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // methods - insert, lookup,remove

    // lookup

    lookup (value) {
        // check if root is null

        if (!this.root) {
            return false;
        }

        // check for null
        if (!value) {
            return false;
        }

        // for root = value;
        let currentNode = this.root;
        
        // Kumar's implementation

        while (currentNode){
            if (value<currentNode.value){
                if (currentNode.value === value) {
                    return currentNode;

                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.value === value) {
                    return currentNode;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
        return false;

        // andrei's implementation

        // while (currentNode) {
        //     if (value < currentNode.value) {
        //         //left
        //         currentNode = currentNode.left;
        //     } else if (value > currentNode.value) {
        //         // right
        //         currentNode = currentNode.right;
        //     } else if (value === currentNode.value) {
        //         //return
        //         return currentNode;
        //     }
        // }
        // return false;
    }

    // insert
    insert(value) {
        // no duplicate allowed

        if (this.lookup(value)) {
            return false;
        }

        // value = null
        if (!value) {
            return false;
        }

        const newNode = new Node(value);

        // first entry

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        // create a node

        let currentNode = this.root;
        let loop = true;

        
        while (loop){
            if (newNode.value<currentNode.value){
                //left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    loop = false;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                //right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    loop = false;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }

    // remove 

    remove (value) {
        // no duplicate allowed

        if (this.lookup(value)) {
            return false;
        }

        // value = null
        if (!value) {
            return false;
        }
    }

}

    

// testing

const tree = new BinarySearchTree();

// insert check

console.log(tree.insert(9)); 
console.log(tree.insert(4)); 
console.log(tree.insert(6)); 
console.log(tree.insert(20)); 
console.log(tree.insert(170)); 
console.log(tree.insert(15)); 
console.log(tree.insert(1)); 

console.log(tree.insert(1)); 


// check lookup

console.log(tree.lookup(1));
console.log(tree.lookup(170));
console.log(tree.lookup(1123));
console.log(tree.lookup(9));


console.log(tree.lookup(null));

console.log(tree.lookup('a'));

// print the tree

console.log(JSON.stringify(traverse(tree.root))); 

// helping function
function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null:
    traverse(node.left);
    tree.right = node.right === null ? null:
    traverse(node.right);
    return tree;
}