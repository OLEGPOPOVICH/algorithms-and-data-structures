const Graph = require('../../../data-structures/graph/graph');

/** Поиск в глубину (Итеративный) */
Graph.prototype.dfsIterative = function (startId) {
  if (!this.vertices.has(startId)) {
    throw new Error(`Вершина с id ${startId} не существует.`);
  }

  /** Стек для хранения вершин */
  const stack = [startId];
  /** Посещённые вершины */
  const visited = new Set();
  /** Порядок обхода вершин */
  const result = [];

  while (stack.length > 0) {
    /** Извлекаем вершину из стека */
    const nodeId = stack.pop();

    if (!visited.has(nodeId)) {
      /** Помечаем вершину как посещённую */
      visited.add(nodeId);
      /** Добавляем узел в результат */
      result.push(nodeId);

      /** Ребра вершины */
      const vertexEdges = this.adjacencyList.get(nodeId) || [];

      /** Добавляем идентификатор вершины в стек (в обратном порядке для сохранения порядка обхода) */
      for (let i = vertexEdges.length - 1; i >= 0; i--) {
        const vertexId = vertexEdges[i].target.id;

        if (!visited.has(vertexId)) {
          stack.push(vertexId);
        }
      }
    }
  }

  return result;
}

const graph = new Graph();

graph.addVertex('A', 'Value A');
graph.addVertex('B', 'Value B');
graph.addVertex('C', 'Value C');
graph.addVertex('D', 'Value D');
graph.addVertex('E', 'Value E');
graph.addVertex('F', 'Value F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('E', 'F');

console.log("Поиск в глубину (Итеративный):", graph.dfsIterative('A'));
