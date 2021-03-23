// unweighted undirected graph
// using adjacency list with hash tables
 

// class Graph - numberOfNodes, adjacentList (hash table)
// METHODS

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
   }
   
   // just adding the index
   addVertex (node) {
       // add a index with no connections (so a empty list)
       this.adjacentList[node] = [];
       // increment node count
       this.numberOfNodes++;
       return this
   }

   // add in both nodes in array
   addEdge (node1, node2) {
        // add the node1 in node2 array and vice versa
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return this;

   }

   showConnections() {
        let keys = Object.keys(this.adjacentList);
        for (let nodes of keys) {
            let nodeConnections = this.adjacentList[nodes];
            let connections = "";
            for (let vertex of nodeConnections) {
                connections += vertex+" "
            }
            console.log(nodes + "-->" + connections);
        }
   }
}


var myGraph = new Graph();

console.log(myGraph.addVertex('0'));
console.log(myGraph.addVertex('1'));
console.log(myGraph.addVertex('2'));
console.log(myGraph.addVertex('3'));
console.log(myGraph.addVertex('4'));
console.log(myGraph.addVertex('5'));
console.log(myGraph.addVertex('6'));
console.log(myGraph.addEdge('3', '1'));
console.log(myGraph.addEdge('3', '4'));
console.log(myGraph.addEdge('4', '2'));
console.log(myGraph.addEdge('4', '5'));
console.log(myGraph.addEdge('1', '2'));
console.log(myGraph.addEdge('1', '0'));
console.log(myGraph.addEdge('0', '2'));
console.log(myGraph.addEdge('6', '5'));

myGraph.showConnections()