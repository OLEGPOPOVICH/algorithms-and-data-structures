const Node = require('../../node');

/** Множество на основе BST */
class BSTSet {
  constructor() {
    this.root = null;
  }

  /** Добавляет значение */
  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return true;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return false;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return true;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return true;
        }

        current = current.right;
      }
    }
  }

  /** Проверяет наличие значения */
  has(value) {
    let current = this.root;

    while (current) {
      if (value === current.value){
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  /** Удаляет узел */
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  /** Рекурсивно удаляет узел */
  removeNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      // Случай 1: Узел без потомков
      if (!node.left && !node.right) {
        return null;
      }

      // Случай 2: Узел с одним потомком
      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      // Случай 3: Узел с двумя потомками
      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
    }

    return node;
  }

  /** Ищет самый минимальный узел в поддереве */
  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }

    return node;
  }

  /** Возвращает размер дерева */
  size() {
    const countNodes = (node) => {
      if (!node) {
        return 0;
      }

      return 1 + countNodes(node.left) + countNodes(node.right);
    };

    return countNodes(this.root);
  }
}

const bstSet = new BSTSet();
bstSet.add(10);
bstSet.add(5);
bstSet.add(15);
bstSet.add(3);
bstSet.add(7);

console.log(bstSet.has(7));

bstSet.remove(5);

console.log(bstSet.size());
