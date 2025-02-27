const Node = require('./node');

/** Словарь на основе BST */
class BstMap {
  constructor() {
    this.root = null;
  }

  /** Добавляет пары "ключ-значение" */
  set(key, value) {
    const newNode = new Node(key, value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (key === current.key) {
        current.value = value;
        return;
      }

      if (key < current.key) {
        if (!current.left) {
          current.left = newNode;
          return;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  /** Возвращает значение по ключу */
  get(key) {
    let current = this.root;

    while (current) {
      if (key === current.key) {
        return current.value;
      }

      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }

  /** Удаляет узел по ключу */
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  /** Рекурсивно удаляет узел по ключу */
  removeNode(node, key) {
    if (!node) {
      return null;
    }

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
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
      node.key = minNode.key;
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.key);
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

const bstMap = new BstMap();
bstMap.set(10, "Десять");
bstMap.set(5, "Пять");
bstMap.set(15, "Пятнадцать");
bstMap.set(3, "Три");

console.log(bstMap.get(5));
console.log(bstMap.get(20));

bstMap.remove(5);
console.log(bstMap.get(5));
