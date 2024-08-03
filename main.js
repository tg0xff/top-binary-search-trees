import Tree from "./classes.js";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// for (let i = 0; i < 100; i++) {
//   const num = Math.floor(100 * Math.random() + 1);
//   arr[i] = num;
// }
// arr.sort();
// console.log(arr);
const tree = new Tree(arr);

console.log("Full tree:");
tree.prettyPrint();

// Insertion.
tree.insert(27);
console.log("Inserted '27':");
tree.prettyPrint();
tree.insert(33);
console.log("Inserted '33':");
tree.prettyPrint();
tree.insert(8);
console.log("Inserted '8,' a duplicate:");
tree.prettyPrint();

// Deletion.
tree.deleteItem(3);
console.log("Deleted '3,' a leaf with no children:");
tree.prettyPrint();
tree.deleteItem(5);
console.log("Deleted '5,' a leaf with one child:");
tree.prettyPrint();
tree.deleteItem(8);
console.log("Deleted '8,' a leaf with two children:");
tree.prettyPrint();

// Find.
console.log("Finding and printing node '67':")
tree.prettyPrint(tree.find(67));
console.log("Finding and printing the non-existent node '35':")
tree.prettyPrint(tree.find(35));
tree.insert(35);
console.log("Added node '35':")
tree.prettyPrint();
console.log("Finding and printing node '35':")
tree.prettyPrint(tree.find(35));
