const Node = require('./node');

/** Бинарное дерево */
class BinaryTree {
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
    // Вставляем случайным образом
    if (Math.random() < 0.5) {
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
  searchNode(node, value) {
    // Найден узел или достигнут конец дерева
    if (node === null || node.value === value) {
      return node;
    }

    const leftSearch = this.searchNode(node.left, value);

    if (leftSearch) {
      return leftSearch;
    }

    return this.searchNode(node.right, value);
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

    if (node.value === value) {
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
      // Находим самого правого потомка в левом поддереве
      const rightmostInLeftSubtree = this.findRightmost(node.left);
      node.value = rightmostInLeftSubtree.value;
      node.left = this.removeNode(node.left, rightmostInLeftSubtree.value);

      return node;
    }

    // Рекурсивно ищем узел для удаления
    node.left = this.removeNode(node.left, value);
    node.right = this.removeNode(node.right, value);

    return node;
  }

  /** Ищет самый правый узел в поддереве */
  findRightmost(node) {
    while (node.right) {
      node = node.right;
    }

    return node;
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);
tree.insert(70);
tree.insert(80);

tree.remove(40)

tree.levelOrderTraversal(tree.root, (value) => {
  console.log("value", value);
});
