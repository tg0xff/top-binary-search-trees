class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const processedArr = this.#processArray(array);
    this.root = this.#buildTree(processedArr, 0, processedArr.length - 1);
  }
  #processArray(array) {
    array.sort((a, b) => a - b);
    const uniqueValues = new Set();
    const uniqueArray = array.reduce((arr, item) => {
      if (!uniqueValues.has(item)) {
        uniqueValues.add(item);
        arr.push(item);
      }
      return arr;
    }, []);
    return uniqueArray;
  }
  #buildTree(array, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);
    node.left = this.#buildTree(array, start, mid - 1);
    node.right = this.#buildTree(array, mid + 1, end);
    return node;
  }
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
  insert(root, data) {
    if (root === null) {
      return new Node(data);
    }
    if (data === root.data) {
      return root;
    }

    if (data < root.data) {
      root.left = this.insert(root.left, data);
    } else if (data > root.data) {
      root.right = this.insert(root.right, data);
    }

    return root;
  }
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// for (let i = 0; i < 100; i++) {
//   const num = Math.floor(100 * Math.random() + 1);
//   arr[i] = num;
// }
// arr.sort();
// console.log(arr);
const tree = new Tree(arr);
tree.prettyPrint(tree.root);
