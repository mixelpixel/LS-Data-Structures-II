// TEST SUITE
// class BinarySearchTree
const binTest = new BinarySearchTree(555); // 'abc' is the ARGUMENT we pass in to the function.
console.log('TESTING: const binTest = new BinarySearchTree(555).');
console.log(`1. binTest is a instance of class BinarySearchTree: ${binTest}.`);
console.log('2. binTest is:', binTest);
console.log(`3. binTest is: ${binTest}.`); // <--- WHY THE PRINT DIFF????????????????????????
console.log(`4. const binTest = new BinarySearchTree(555) gave us a binTest.value of: ${binTest.value}.\n`);

// insert()
console.log('TESTING: insert()');
console.log(`1. Is binTest.insert a function? ${binTest.insert instanceof Function}.`);
console.log(`2. The method binTest.insert() returns: ${binTest.insert()} - it just changes the STATE of itself, no return.`);
console.log(`3. The method binTest.insert(1234) returns: ${binTest.insert(111)} - it just changes the STATE of itself, no return.\n`);
binTest.insert(222);
binTest.insert(1000);

// contains()
console.log('TESTING: contains()');
console.log(`1. The method binTest.contains() results in a ${binTest.contains()}`);
console.log('2. Q: Is 111  in binTest? A:', binTest.contains(111));  // <--- true
console.log('3. Q: Is 222  in binTest? A:', binTest.contains(222));  // <--- true
console.log('4. Q: Is 555  in binTest? A:', binTest.contains(555));  // <--- true
console.log('5. Q: Is 1000 in binTest? A:', binTest.contains(1000)); // <--- true
console.log('6. Q: Is 2000 in binTest? A:', binTest.contains(2000)); // <--- false
console.log('7. binTest now contains:\n', binTest);

// // depthFirstForEach()
const foo = x => x * 2;
let array = [];
const bar = (value) => {
  array.push(value); // <--- OT: push returns array.length
  return value;      // <--- OT: this keeps the function from returning length from a one line implicit return w/push
};
console.log('\nTESTING: depthFirstForEach()');
binTest.depthFirstForEach(bar);
console.log(`1. binTest BEFORE Callback() invoked & it contains: ${array}\n`, binTest);
console.log(`2. the callback function: ${foo}`);
binTest.depthFirstForEach(foo);
array = [];
binTest.depthFirstForEach(bar);
console.log(`3. binTest AFTER Callback() invoked & it contains: ${array}\n`, binTest);
