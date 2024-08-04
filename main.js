import Tree from "./classes.js";

let arr = [];
let printString = "";

for (let i = 0; i < 100; i++) {
  const num = Math.floor(100 * Math.random() + 1);
  arr[i] = num;
}
const tree = new Tree(arr);

console.log(`Is the tree balanced? ${tree.isBalanced() ? "Yes" : "No"}`);

console.log("Printing elements in level order:")
arr = [];
tree.levelOrder((node) => arr.push(node.data));
printString = `${arr[0]}`;
arr.forEach((item) => printString += `, ${item}`);
console.log(printString);

console.log("Printing elements in pre-order:")
arr = [];
tree.preOrder((node) => arr.push(node.data));
printString = `${arr[0]}`;
arr.forEach((item) => printString += `, ${item}`);
console.log(printString);
