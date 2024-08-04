import Tree from "./classes.js";

const treeValues = [];
for (let i = 0; i < 100; i++) {
  const num = Math.floor(100 * Math.random() + 1);
  treeValues[i] = num;
}
const tree = new Tree(treeValues);

console.log(`Is the tree balanced? ${tree.isBalanced() ? "Yes" : "No"}`);

let printString = "";

console.log("Printing elements in level order:")
printString = "";
tree.levelOrder((node) => printString += `, ${node.data}`);
printString = printString.slice(2);
console.log(printString);

console.log("Printing elements in pre-order:")
printString = "";
tree.preOrder((node) => printString += `, ${node.data}`);
printString = printString.slice(2);
console.log(printString);

console.log("Printing elements in in-order:")
printString = "";
tree.inOrder((node) => printString += `, ${node.data}`);
printString = printString.slice(2);
console.log(printString);

console.log("Printing elements in post-order:")
printString = "";
tree.postOrder((node) => printString += `, ${node.data}`);
printString = printString.slice(2);
console.log(printString);

for (let i = 0; i < 16; i++) {
  const num = Math.floor(100 * Math.random() + 1);
  tree.insert(num);
}
console.log("Added 16 more random numbers.");
console.log(`Is the tree balanced? ${tree.isBalanced() ? "Yes" : "No"}`);

tree.rebalance();
console.log("Rebalanced the tree.");
console.log(`Is the tree balanced? ${tree.isBalanced() ? "Yes" : "No"}`);
