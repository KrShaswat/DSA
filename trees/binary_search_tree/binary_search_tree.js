// class node - left,right,value

class Node {
  constructor(value) {
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

  lookup(value) {
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

    while (currentNode) {
      if (value < currentNode.value) {
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

    while (loop) {
      if (newNode.value < currentNode.value) {
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

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
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

// console.log(tree.insert(1));

// // check lookup

// console.log("----------------------------------------");

// console.log(tree.lookup(1));
// console.log(tree.lookup(170));
// console.log(tree.lookup(1123));
// console.log(tree.lookup(9));

// console.log(tree.lookup(null));

// console.log(tree.lookup('a'));

// check remove

console.log("-----------------------------------------");
console.log(tree.remove(null));
console.log(tree.remove(45));
console.log(tree.remove(1));
console.log(tree.remove(170));


// print the tree

console.log("----------------------------------------");
console.log(JSON.stringify(traverse(tree.root)));

// helping function
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
