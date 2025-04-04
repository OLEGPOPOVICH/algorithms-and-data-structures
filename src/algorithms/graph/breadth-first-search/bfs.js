const Graph = require('../../../data-structures/graph/graph');

/** Поиск в ширину */
Graph.prototype.bfs = function (startId) {
  if (!this.vertices.has(startId)) {
    throw new Error(`Вершина с id ${startId} не существует.`);
  }

  /** Очередь для хранения вершин */
  const queue = [startId];
  /** Посещённые вершины */
  const visited = new Set();
  /** Порядок обхода вершин */
  const result = [];

  /** Помечаем вершину как посещённую */
  visited.add(startId);

  while (queue.length > 0) {
    /** Извлекаем вершину из очереди */
    const nodeId = queue.shift();
    /** Добавляем узел в результат */
    result.push(nodeId);

    /** Ребра вершины */
    const vertexEdges = this.adjacencyList.get(nodeId) || [];

    /** Обходим всех соседей текущей вершины */
    for (const edge of vertexEdges) {
      const vertexId = edge.target.id;

      if (!visited.has(vertexId)) {
        visited.add(vertexId);
        queue.push(vertexId);
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

console.log("Поиск в ширину:", graph.bfs('A'));
