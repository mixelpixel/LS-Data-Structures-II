/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }
  // should have methods named `addNode`, `contains`, `removeNode`, `addEdge`, `getEdge`, and `removeEdge`
  addNode(newNode, toNode) {
    this.graph.push({
      newNode,
      toNode
    });
  }
  contains(hasValue) {}
  removeNode(deleteValue) {}
  addEdge(fromNode, toNode) {}
  getEdge(fromNode, toNode) {}
  removeEdge(fromNode, toNode) {}
}

module.exports = Graph;
