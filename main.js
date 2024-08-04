import Tree from "./classes.js";

const arr = [];
for (let i = 0; i < 100; i++) {
  const num = Math.floor(100 * Math.random() + 1);
  arr[i] = num;
}
const tree = new Tree(arr);
