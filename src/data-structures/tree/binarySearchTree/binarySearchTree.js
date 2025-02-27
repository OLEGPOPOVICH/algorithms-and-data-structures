const Node = require('./node');

/** Бинарное дерево поиска */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /** Добавляет новый узел */
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /** Рекурсивно вставляет узел */
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /** Симметричный обход */
  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback && callback(node.value)
      this.inOrderTraversal(node.right, callback);
    }
  }

  /** Прямой обход */
  preOrderTraversal(node, callback) {
    if (node !== null) {
      callback && callback(node.value)
      this.preOrderTraversal(node.left, callback);
      this.preOrderTraversal(node.right, callback);
    }
  }

  /** Обратный обход */
  postOrderTraversal(node, callback) {
    if (node !== null) {
      this.postOrderTraversal(node.left, callback);
      this.postOrderTraversal(node.right, callback);
      callback && callback(node.value)
    }
  }

  /** Обход в ширину */
  levelOrderTraversal(node, callback) {
    if (!node) {
      return;
    }

    const queue = [node];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      callback && callback(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  /** Поиск узла */
  search(value) {
    return this.searchNode(this.root, value);
  }

  /** Рекурсивно ищет узел */
  searchNode(node, value) {
    if (node === null || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
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
}

const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(20);
bst.insert(90);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(10);
bst.insert(80);
bst.insert(95);
bst.insert(85);

// bst.remove(40)

bst.inOrderTraversal(bst.root, (value) => {
  console.log("inOrderTraversal", value);
})
console.log("-------------");
bst.preOrderTraversal(bst.root, (value) => {
  console.log("preOrderTraversal", value);
});
console.log("-------------");
bst.postOrderTraversal(bst.root, (value) => {
  console.log("postOrderTraversal", value);
});
console.log("-------------");
bst.levelOrderTraversal(bst.root, (value) => {
  console.log("breadthFirstTraversal", value);
});
