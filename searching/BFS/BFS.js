class Node {
    constructor(value) {
      this.right = null;
      this.left = null;
      this.value = value;
    }
  }

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

    breadthFirstSearch() {
        // output in an array with BFS expected output

        // current node pointer

        let currentNode = this.root;

        // result array 

        let result = [];

        // queue for children and loop pivot

        let queue = [];

        // push in currentNode in queue

        queue.push(currentNode);

        // loop over the queue unshift, push in value and children

        while(queue.length > 0) { // runs till the queue is empty
            
            // unshift a value from the queue
            currentNode = queue.shift(); // worte unshift and danced around cursing the computer.

            // push in the value of unshifted node
            result.push(currentNode.value);

            // check if the unshifted value has a left and push if it exists
            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            // again check for right and push in if it exists
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return result;

    }

    BFS_r (queue, result) {
        // base case queue empty
        if (!queue.length) {
            return result;
        }

        // unshift a node
        let currentNode = queue.shift();
        result.push(currentNode.value);

        // check left and right for value and push in queue
        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        return this.BFS_r(queue, result);
    }
  }

  // feed the tree

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.breadthFirstSearch());

console.log(tree.BFS_r([tree.root], []));
