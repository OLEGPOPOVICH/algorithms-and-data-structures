const Graph = require('../../../data-structures/graph/graph');

/** Поиск в глубину (Рекурсивный) */
Graph.prototype.dfsRecursive = function (startId) {
  if (!this.vertices.has(startId)) {
    throw new Error(`Вершина с id ${startId} не существует.`);
  }

  /** Посещённые вершины */
  const visited = new Set();
  /** Порядок обхода вершин */
  const result = [];

  const dfs = (nodeId) => {
    /** Помечаем вершину как посещённую */
    visited.add(nodeId);
    /** Добавляем узел в результат */
    result.push(nodeId);

    /** Ребра вершины */
    const vertexEdges = this.adjacencyList.get(nodeId) || [];

    /** Обходим все ребра текущей вершины */
    for (const edge of vertexEdges) {
      const vertexId = edge.target.id;

      if (!visited.has(vertexId)) {
        dfs(vertexId);
      }
    }
  };

  dfs(startId);

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

console.log("Поиск в глубину (Рекурсивный):", graph.dfsRecursive('A'));
