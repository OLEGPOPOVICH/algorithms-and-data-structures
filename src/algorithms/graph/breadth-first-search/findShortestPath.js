const Graph = require('../../../data-structures/graph/graph');

/** Поиск кратчайшего пути между двумя вершинами */
Graph.prototype.findShortestPath = function (startId, targetId) {
  if (!this.vertices.has(startId) || !this.vertices.has(targetId)) {
    throw new Error('Одна из вершин не существует.');
  }

  /** Посещённые вершины */
  const visited = new Map();
  /** Очередь для хранения вершин */
  const queue = [startId];

  visited.set(startId, null);

  while (queue.length > 0) {
    const nodeId = queue.shift();

    if (nodeId === targetId) {
      /** Восстанавливаем путь */
      const path = [];
      let currentId = nodeId;

      while (currentId !== null) {
        path.unshift(currentId);
        currentId = visited.get(currentId);
      }

      return path;
    }

    /** Ребра вершины */
    const vertexEdges = this.adjacencyList.get(nodeId) || [];

    /** Обходим всех соседей текущей вершины */
    for (const edge of vertexEdges) {
      const vertexId = edge.target.id;

      if (!visited.has(vertexId)) {
        visited.set(vertexId, nodeId);
        queue.push(vertexId);
      }
    }
  }

  return null;
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

console.log("Поиск в ширину:", graph.findShortestPath('A', 'F'));
