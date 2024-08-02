class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array, 0, array.length - 1);
  }
  buildTree(array, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);
    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);
    return node;
  }
}
