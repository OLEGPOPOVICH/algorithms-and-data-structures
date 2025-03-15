const Node = require('./node');

/** Красно-черное дерево */
class RedBlackTree {
  constructor() {
    this.EMPTY_NODE = new Node(null, 'black');
    this.root = this.EMPTY_NODE;
  }

  /** Вставка элемента */
  insert(value) {
    const newNode = new Node(value);

    let parentNode = null;
    let currentNode = this.root;

    while (currentNode !== this.EMPTY_NODE) {
      parentNode = currentNode;

      if (newNode.value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    newNode.parent = parentNode;
    newNode.left = this.EMPTY_NODE;
    newNode.right = this.EMPTY_NODE;

    if (parentNode === null) {
      this.root = newNode;
    } else if (newNode.value < parentNode.value) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }

    this.balance(newNode);
  }

  /** Восстанавливает свойства красно-черного дерева */
  balance(node) {
    if (!node || !node.parent || !node.parent.parent) {
      return;
    }

    while (node.parent && node.parent.color === 'red') {
      /** Отец */
      const father = node.parent;
      /** Дедушка */
      const grandfather = father.parent;
      /**  Определяем, является ли отец левым или правым потомком дедушки */
      const isLeft = father === grandfather.left;
      /** Дядя */
      const uncle = isLeft ? grandfather.right : grandfather.left;
      /** Дядя красный */
      const isUncleRed = uncle && uncle.color === 'red';

      /** Случай когда дядя красный */
      if (isUncleRed) {
        father.color = 'black';
        uncle.color = 'black';
        grandfather.color = 'red';

        node = grandfather;
      }

      /** Случай когда дядя черный или не существует */
      if (!isUncleRed) {
        /** Левый треугольник */
        const isLeftTriangle = isLeft && node === father.right;
        /** Правый треугольник */
        const isRightTriangle = !isLeft && node === father.left;

        /** Случай треугольник */
        if (isLeftTriangle || isRightTriangle) {
          node = father;

          isLeft
            ? this.leftRotate(father)
            : this.rightRotate(father);
        }

        /** Случай прямая линия */
        father.color = 'black';
        grandfather.color = 'red';

        isLeft
          ? this.rightRotate(grandfather)
          : this.leftRotate(grandfather);
      }
    }

    /** Корень всегда черный */
    if (this.root) {
      this.root.color = 'black';
    }
  }

  /** Левый поворот */
  leftRotate(node) {
    /** Сохраняем правого потомка узла */
    const rightChild = node.right;
    /** Связываем правого потомка узла с левым потомком правого потомка узла */
    node.right = rightChild.left;

    /** Если у правого потомка узла есть левый потомок */
    if (rightChild.left !== null) {
      /** То связываем родителя левого потомка с узлом */
      rightChild.left.parent = node;
    }

    /** Связываем родителя правого потомка узла с родителем узла */
    rightChild.parent = node.parent;

    /** Если узел корень */
    if (node.parent === null) {
      /** То правый потомок узла становится новым корнем */
      this.root = rightChild;
      /** Если узел равен левому потомку родителя узла */
    } else if (node === node.parent.left) {
      /** То связываем левого потомка родителя узла с правым потомком узла */
      node.parent.left = rightChild;
    } else {
      /** Иначе связываем правого потомка родителя узла с правым потомком узла */
      node.parent.right = rightChild;
    }

    /** Связываем левого потомка правого потомка узла с узлом */
    rightChild.left = node;
    /** Связываем родителя узла с правым потомком узла */
    node.parent = rightChild;
  }

  /** Правый поворот */
  rightRotate(node) {
    /** Сохраняем левого потомка узла */
    const leftChild = node.left;
    /** Связываем левого потомка узла с правым потомком левого потомка узла */
    node.left = leftChild.right;

    /** Если у левого потомка узла есть правый потомок */
    if (leftChild.right !== null) {
      /** То связываем родителя правого потомка с узлом */
      leftChild.right.parent = node;
    }

    /** Связываем родителя левого потомка узла с родителем узла */
    leftChild.parent = node.parent;

    /** Если узел корень */
    if (node.parent === null) {
      /** То левый потомок узла становится новым корнем */
      this.root = leftChild;
      /** Если узел равен правому потомку родителя узла */
    } else if (node === node.parent.right) {
      /** То связываем правого потомка родителя узла с левым потомком узла */
      node.parent.right = leftChild;
    } else {
      /** Иначе связываем левого потомка родителя узла с левым потомком узла */
      node.parent.left = leftChild;
    }

    /** Связываем правого потомка левого потомка узла с узлом */
    leftChild.right = node;
    /** Связываем родителя узла с левым потомком узла */
    node.parent = leftChild;
  }

  /** Симметричный обход */
  inOrderTraversal(node, result = []) {
    if (node !== this.EMPTY_NODE) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}

const rbt = new RedBlackTree();

rbt.insert(10);
rbt.insert(20);
rbt.insert(30);
rbt.insert(5);
rbt.insert(25);

console.log("In-order traversal:", rbt.inOrderTraversal(rbt.root));
