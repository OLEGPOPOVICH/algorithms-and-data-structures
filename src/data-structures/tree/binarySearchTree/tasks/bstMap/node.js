/** Узел словаря на основе BST */
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = Node;
