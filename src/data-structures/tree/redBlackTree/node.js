/** Узел красно-черного дерева */
class Node {
  constructor(value, color = 'red') {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

module.exports = Node;
