# Data Structures II

Topics:

 * Tree
 * Graph
 * Binary Search Tree


#### Trees

  * Should have the methods: `addChild`, and `contains`
  * Each node on the tree should have a `value` property and a `children` array.
  * `addChild(value)` should accept a value and add it to that node's `children` array.
  * `contains(value)` should return `true` if the tree or its children the given value.
  * When you add nodes to the `children` array use `new Tree(value)` to create the node.
  * You can instantiate the `Tree` class inside of itself.

#### Binary Search Tree

  * Should have the methods: `insert`, `contains`, and `depthFirstForEach`.
  * `insert(value)` inserts the new value at the correct location in the tree.
  * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.

#### Graphs

  * should have methods named `addNode`, `contains`, `removeNode`, `addEdge`, `getEdge`, and `removeEdge`
  * `addNode(newNode, toNode)` should add a new item to the graph.  If `toNode` is given then the new node should share an edge with an existing node `toNode`.
  * `contains(value)` should return true if the graph contains the given value.
  * `removeNode(value)` should remove the specified value from the graph.
  * `addEdge(fromNode, toNode)` should add an edge between the two specified nodes.
  * `getEdge(fromNode, toNode)` should return `true` if an edge exists between the two specified graph nodes.
  * `removeEdge(fromNode, toNode)` should remove the edge between the two specified nodes.


### Extra Credit

 * Add a method to the `Graph` class that searches through the graph using edges.  Make this search first as a depth first search and then refactor to a breadth first search.

### getting solution branch to local computer:
- so far, this worked on Advanced JS project, but doesn't when I have my pair prog partner as the upstream, or if I remove upstream totallym or if I set sunjieming to upstream... w.i.p.

```console
1. $  git remote -v     <------------------------ No upstream is fine
origin  https://github.com/YOUR_GITHUB_USERNAME/Advanced-JavaScript.git (fetch)
origin  https://github.com/YOUR_GITHUB_USERNAME/Advanced-JavaScript.git (push)

2. $  git branch -a     <------------------------- Shows all the branches in your project, currently no "solution"
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/solution     <-------- THAT'S THE ONE ON GITHUB AND YOU CAN'T ACCESS IT FROM YOUR PROJECT YET

3. $  git checkout -b solution origin/solution  <---- This is the command to get the "solution" branch to your computer
// syntax: CMD Action -flag newName source/nameOfBranchYou'reCopying

4. $  git branch -a
* master
  solution       <-------------------------------------- LOOKIE Thar!
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/solution

6. $  git branch      <-------------------- which branch am I on?
* master
  solution

7. $  git checkout solution    <-------------- you can switch branches!
Switched to branch 'solution'
Your branch is up-to-date with 'origin/solution'.

8. $  git branch     <--------------------------- confirm which branch you're in
  master
* solution

9. $  git checkout master     <----------------- switch back to the master branch
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

10. $  git branch           <--------------------------------confirm
* master
  solution
```
:nerd_face:
