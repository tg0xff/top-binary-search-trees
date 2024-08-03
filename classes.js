class Queue {
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
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
  prettyPrint(node = this.root, prefix = "", isLeft = true) {
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
  insert(data, root = this.root) {
    if (root === null) {
      return new Node(data);
    }
    if (data === root.data) {
      return root;
    }

    if (data < root.data) {
      root.left = this.insert(data, root.left);
    } else if (data > root.data) {
      root.right = this.insert(data, root.right);
    }

    return root;
  }
  deleteItem(data, root = this.root) {
    if (root === null) return null;
    if (data === root.data) {
      // Delete leaf when it has two children.
      if (root.left && root.right) {
        let nextSmallest = root.right;
        while (nextSmallest.left !== null) {
          nextSmallest = nextSmallest.left;
        }
        const dataTmp = nextSmallest.data;
        this.deleteItem(nextSmallest.data, this.root);
        root.data = dataTmp;
        return root;
      }
      // Delete leaf when it has only one child.
      if (root.left) return root.left;
      if (root.right) return root.right;
      // Delete leaf when it has no children.
      return null;
    }
    if (data < root.data) {
      root.left = this.deleteItem(data, root.left);
    } else if (data > root.data) {
      root.right = this.deleteItem(data, root.right);
    }
    return root;
  }
  find(data, root = this.root) {
    if (root === null) return null;
    if (data === root.data) return root;
    if (data < root.data) {
      return this.find(data, root.left);
    } else if (data > root.data) {
      return this.find(data, root.right);
    }
  }
}
